import React, {Component} from 'react';
import './Button.css';

class Button extends Component{

    render(){

        return(

            <div className = "Button" 
            
            onClick = {this.props.onClick}
            data-line = {this.props.line}
            data-col = {this.props.col}
            function = {this.props.function}
            
            >
                
                {this.props.symbol}

            </div>

        )

    }


}

export default Button;