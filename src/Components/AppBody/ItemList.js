import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Store/Cart";
import Items from "./Items";

const ItemList =({showedItem, index, setShowItemM, FoodList, DisplayItem})=>{
    var dispatch = useDispatch();
    const AddItemHandler =(foodName)=>{
        dispatch(addToCart(foodName));
    }
    const clickHandler = (event)=>{
        if(showedItem == index){
            setShowItemM(null);
        }
        else{
            setShowItemM(index);
        }
    }
    return <div>
        <div className="font-bold text-xl left-0 flex justify-between m-auto w-6/12 hover:cursor-pointer hover:bg-gray-200" onClick={clickHandler}>
            {FoodList.card.card.title + "("+FoodList.card.card.itemCards.length+")"}
            {DisplayItem ? <span>&#11165;</span> : <span>&#11167;</span>}
        </div>
        {DisplayItem ?  FoodList.card.card.itemCards.map((obj)=>{
            return <Items key={obj.card.info.name} ItemData = {obj}/>
        }):""}
    </div>
}

export default ItemList;