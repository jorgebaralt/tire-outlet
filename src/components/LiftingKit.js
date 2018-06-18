import React , {Component}from 'react';
import {Carousel, Card, Row,Col} from 'antd';
import {connect} from 'react-redux'
import Jumbotron from './Jumbotron'


class LiftingKit extends Component{

    renderWhyLift(){
        return this.props.whyLift.map((reason)=> {

            return (

                <Row key={reason.title}>

                    <Card style={{ margin:'0 auto 1%', maxWidth:900} }>
                        <Col xxl={12}><h2>{reason.title}</h2></Col>
                        <Col xxl={11}><p className={'card-description'}>{reason.description}</p></Col>
                    </Card>

                </Row>
            )
        })
    }

    render(){
        return(
            <div>

                <Jumbotron title={'Lifting Kits'} description={'We offer Big Tires, Suspension, Body Lifting, Wheels, of any type, brand. Feel free to come and ask for our prices and help'}/>

                <h1>Why Should I Lift My Truck?</h1>
                {this.renderWhyLift()}
                <h1> Some of Our Work </h1>
                <div>Render all images of trucks</div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        whyLift : state.whyLift
    }
}

export default connect(mapStateToProps)(LiftingKit)