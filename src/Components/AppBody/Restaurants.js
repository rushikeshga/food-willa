import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "../../Utils/useRestaurantData";
import ItemList from "./ItemList";
import { useState } from "react";

const Restaurants = ()=>{
    const {resId} = useParams();
    var resInfo = useRestaurantData(resId);
    const [showItem, setShowItem] = useState(0);
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    else{
        console.log(resInfo);
        var resName="";
        resInfo?.data?.cards.forEach((obj)=>{
            if(obj?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2"){
                resName = obj?.card?.card?.["text"];
            }
        });
        //var resName = resInfo?.data?.cards[0]?.card?.card?.text;
        var groupedCard = resInfo?.data?.cards.filter((obj)=>{
            if(obj?.hasOwnProperty("groupedCard")){
                return true;
            }
        });
        groupedCard = groupedCard[0].groupedCard.cardGroupMap.REGULAR.cards;
        groupedCard = groupedCard.filter((obj)=>{
            if (obj.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                return true;
            }
        });
        return <div className="text-center">
            <div className="w-full">
                <div className="text-3xl font-bold">{resName}</div>
                
                    {groupedCard.map((obj,index)=>{
                        return <ItemList key={index} 
                        FoodList = {obj} 
                        index = {index} 
                        DisplayItem = {index == showItem? true: false} 
                        setShowItemM ={setShowItem} 
                        showedItem ={showItem}></ItemList>
                    })}
            </div>
        </div>
    }
    
}

export default Restaurants;