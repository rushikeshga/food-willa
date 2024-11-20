import React from 'react'
import classes from './Card.module.css'
const Shimmer = () => {
    var totalShimmer =[];
    for(let i=0;i<10;i++){
        totalShimmer.push(<div className={classes.shimmerCard} key={i}><div className={classes.shimmerCardImg}/><div className={classes.shimmerCardHeader}/><div className={classes.shimmerCardSubHeader}/></div>);
    }
  return (
    <div className={classes.shimmerCard_container}>
        {
            totalShimmer
        }
    </div>
  )
}

export default Shimmer