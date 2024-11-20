import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Cart';

const Items = ({ItemData}) => {
    var obj = ItemData;
    var dispatch = useDispatch();
    const AddItemHandler =(foodName)=>{
        dispatch(addToCart(foodName));
    }
  return (
                <div className = "flex justify-between w-6/12 m-auto pb-8">
                    <div className='text-lg relative'>
                        <div className='w-5 h-5'>
                            {obj.card.info.isVeg ?
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'></img> :
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png'></img>

                                }
                            
                        </div>
                        <div>{obj.card.info.name} </div>
                        <div className='flex justify-between'>
                            { obj.card.info.defaultPrice ? 
                                <>Rs.{obj.card.info.defaultPrice/100} </>:
                                    obj.card.info.finalPrice ?
                                        <> Rs.{obj.card.info.finalPrice/100}</> :
                                            obj.card.info.price ? <> Rs.{obj.card.info.price/100} </>: <></>
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <div>
                            <img className="w-28 h-28 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+obj.card.info.imageId}></img>
                        </div>
                        <div className=' bg-white text-lime-700 rounded font-bold shadow-lg absolute -bottom-3 right-6 w-14 h-8 flex items-center justify-center hover:bg-slate-300'>
                            <button className="bg-transparent p-0 rounded-l-full " data-testId="AddBtn" onClick={()=>AddItemHandler(obj)}>Add+</button>
                        </div>
                    </div>
                </div>         
  )
}

export default Items