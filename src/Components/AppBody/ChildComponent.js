import React from "react";
import UserContext from "../../Utils/UserContext";
class ChildComponent extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(this.props.child +"Constructor");
    }
    componentDidMount(){
        console.log(this.props.child+" didMount");
    }
    componentDidUpdate(){
        console.log(this.props.child+" didUpdate");
    }
    componentWillUnmount(){
        console.log(this.props.child+" willUnmount");
    }
    render(){
        console.log(this.props.child+" render");
        return <div>Hello <UserContext.Consumer>
            {(data)=>{
                return <h2>{data.logInUser}</h2>
            }}
            </UserContext.Consumer></div>;
    }
}

export default ChildComponent;