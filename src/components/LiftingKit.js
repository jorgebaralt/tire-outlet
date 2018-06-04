import React , {Component}from 'react';

class LiftingKit extends Component{

    renderWhyLift(){
        return(
            <div>list with pictures</div>
        )
    }

    render(){
        return(
            <div>
                <h1>Why Should I Lift My Truck?</h1>
                {this.renderWhyLift()}
            </div>

        )
    }
};

export default LiftingKit;