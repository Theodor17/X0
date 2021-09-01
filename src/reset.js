import React, {Component} from 'react';
import './reset.css';

class Reset extends Component{

    render(){

        return(

            <div className = "Reset" onClick = {this.props.onClick}>
                
                Reset

            </div>

        )

    }


}

export default Reset;