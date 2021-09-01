import React, {Component} from 'react';
import './gamearea.css';

class Area extends Component{

    render(){

        return(

            <div className = "Area">

                {this.props.children}
                
            </div>

        )

    }

}

export default Area;