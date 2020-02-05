import React, {Component} from 'react';
import '../style.css'

class Square1 extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {value}=this.props;
        return(
<button className="square" onClick={this.props.onClick}>{value}</button>
        )
    }
}

export default Square1