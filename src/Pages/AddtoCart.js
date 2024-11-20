import { useDispatch, useSelector } from "react-redux";
import { clearItmes } from "../Store/Cart";

const AddtoCart = ()=>{
    var dispatch = useDispatch();
    var CartData = useSelector((store)=>{
        return store.cart.items
    });
    function clearCart(){
        dispatch(clearItmes());
    }
    return <div className="text-center">
        <h2 className="text 2xl font-bold">Cart data</h2>
        <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={clearCart}>Clear Cart</button>
        {CartData.map((obj)=>{
            return <h4>{obj.card.info.name}</h4>
        })}
    </div>
}

export default AddtoCart;