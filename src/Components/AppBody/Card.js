import React from 'react'
import classes from './Card.module.css';
const Card = (props) => {
  return (
    <div className={classes.card} data-testId="ResCard">
    <div >
    {/* <div >
        <img className={classes.logo} alt='' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.image}></img>
        <div className="text-lg font-semibold">{props.resName.length > 20? props.resName.slice(0,20)+"...":props.resName}</div>
        <h4 className={classes.res_name}>{props.cousine.length > 40? props.cousine.slice(0,40)+"...":props.cousine}</h4>
        <h4 className={classes.res_name}>{props.avgRating}</h4>
    </div> */}
    <div >
        <img className={classes.logo} alt='' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.image}></img>
        <div className="text-lg font-semibold ">{props.resName.length > 20? props.resName.slice(0,20)+"...":props.resName}</div>
        <h4 className={classes.res_name}>{props.cousine.length > 40? props.cousine.slice(0,40)+"...":props.cousine}</h4>
        <h4 className={classes.res_name}>{props.avgRating}</h4>
    </div>
    </div>
    </div>
  )
}

export default Card;

export const promotedRestaurant = ()=>{
  return ()=>{
    return 
  }
}