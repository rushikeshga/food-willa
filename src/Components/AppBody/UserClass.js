import React from 'react'
import ChildComponent from './ChildComponent';

class UserClass extends React.Component {
    constructor(props){
        console.log("Parent Constructor");
        super(props);
         this.state = {
            count :0,
            count2:2
         }
    }
    componentDidMount(){
        console.log("Parent didMount");
    }
    render(){
        console.log("Parent render");
        return (<div>
            <h2>About Us</h2><br/>
            <h3>name:{this.props.name}</h3>
            <h4>count:{this.state.count} <button onClick={()=>{
                this.setState({
                    count: this.state.count +1
                });
            }}>count</button></h4>
            <h4>count2:{this.state.count2}<button onClick={()=>{
                this.setState({
                    count2: this.state.count2 +1
                });
            }}>count2</button></h4>
            <ChildComponent child="first"></ChildComponent>
            <ChildComponent child="second"></ChildComponent>
        </div>)
    }
}

export default UserClass;