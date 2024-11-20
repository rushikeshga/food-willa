import Card from "./Card"

const RestCard = (props) =>{
    props = props.resData;
    return <Card
    image = {props.info.cloudinaryImageId}
    resName = {props.info.name}
    cousine = {props.info.cuisines.join(", ")}
    avgRating = {props.info.avgRating}
    />
}
export const TrendingRest = (RestCard) =>{
    return(props) =>{
        return <div>
            <h4 className="absolute bg-black text-white m-2 p-2 rounded-lg">Trending</h4>
            <RestCard {...props}></RestCard>
        </div>
    }
}
export default RestCard;

 