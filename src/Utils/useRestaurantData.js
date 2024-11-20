import { useEffect, useState } from "react";
import { RES_URL } from "./Constants";

const useRestaurantData = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();

    },[]);
    const fetchData = async ()=>{
        var data = await fetch(RES_URL+resId);
        var jsonData = await data.json();
        setResInfo(jsonData);
    }

    return resInfo;
}

export default useRestaurantData;