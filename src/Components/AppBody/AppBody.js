import React, { useEffect, useState } from 'react'
import classes from './AppBody.module.css';
import Shimmer from './Shimmer';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../Utils/useOnlineStatus';
import RestCard,{TrendingRest} from './RestCard';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantData } from '../../Store/RestaurantList';

const Home = () => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    //const [res_data, setRes_data] = useState([]);
    const [filter_data,setFiltered_data] = useState([]);
    if (isScrolledToBottom) {
        console.log("Hello");
    }
    const dispatch = useDispatch();
    var res_data = useSelector((store) => {
        return store.RestaurantList.RestaurantList
    });
    

    var TrendingRestaurant = TrendingRest(RestCard);
    useEffect(() =>{
        if(res_data.length === 0){
            fetchData();
        }
        else{
            setFiltered_data(res_data);
        }
        
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            var x=scrollHeight - scrollTop;
            console.log("scrollHeight: "+scrollHeight+" scrollTop:"+scrollTop+"scrollHeight - scrollTop: "+x);
            console.log("clientHeight: "+clientHeight);
            if (scrollHeight - scrollTop < clientHeight) {
              setIsScrolledToBottom(true);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            console.log("Useeffect end");
          };
    },[]);

    var fetchData = async ()=>{
        var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       var json= await data.json();
       dispatch(setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
       //setRes_data(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFiltered_data(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    var onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <div><h2>Oops!.. something went wrong</h2></div>

    }
    if(res_data.length === 0){
        return  <div><SearchBar/><Shimmer></Shimmer></div>
    }
    function filterHandler(searchValue){
        const data = res_data.filter((obj)=>{
            var restaurant = obj.info.name.toLowerCase();
            return restaurant.includes(searchValue.toLowerCase());
        });
        setFiltered_data(data);
    }
  return (
    <div>
        <SearchBar onFilterChange = {filterHandler}></SearchBar>
        <div className={classes.cards_container}>
            {
                filter_data.map(
                    (obj) =>{
                        return <Link key={obj.info.id} to={'/restaurant/'+obj.info.id}>
                            {obj.info.avgRating > 4.5 ? <TrendingRestaurant resData={obj} />:<RestCard resData = {obj}/>}
                            
                        </Link>
                    }
                )
            }
        
        </div>
    </div>
  )
}

export default Home