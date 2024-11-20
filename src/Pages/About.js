import UserClass from "../Components/AppBody/UserClass";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const About = () =>{
    var User = useContext(UserContext);
    return (
        <div>
            {/* <UserClass name="Rushikesh Gapat"></UserClass>
            <input type='text' className = "border-2 border-emerald-950 rounded ml-2;"onChange={(e)=>{
          User.setUser({logInUser:e.target.value});<br></br>
        }}></input> */}
        <span className="font-bold">Welcome to FoodCamp;</span><br/> your one-stop shop for online food ordering, groceries, dining, pickup & delivery! 😍<br/>

Here’s why India LOVES the FoodCamp 👇<br/>
- Order food, get instant grocery delivery, and other essential services online<br/>
- FoodCamp One users get unlimited Free Delivery on all their orders<br/>
- Find top local restaurants and stores in your city
        </div>
        
    )
}

export default About;