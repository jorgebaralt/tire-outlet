import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Row,Col,Card} from 'antd';
import Jumbotron from './Jumbotron';

class CarServices extends Component{

    renderTireServices(){
        return this.props.tireServices.map((service) =>{
            return(
                <Row key={service.id}>
                        <Card style={{ width:'auto', margin:'0 auto 1%', maxWidth:900}} >
                            <Col xxl={12}>
                                <h4>{service.title}</h4>
                                <div className={'tire-service-price'}>{service.price}</div>
                            </Col>
                            <Col xxl={12}>
                                <div className={'card-description'}>{service.description}</div>
                            </Col>
                        </Card>
                </Row>
            )
        })
    }

    render(){
        return(
            <div id={'tire-services'}>
                <Jumbotron title={'Tire Services'} description={'We offer any size, brand, and type of tire, just feel free to come and ask for them. Here are some of the Services we offer for the tires'}/>
                {this.renderTireServices()}
                <h1>Deals</h1>
            </div>
        )
    };
}
function mapStateToProps(state){
    return{
        tireServices : state.tireServices
    }
}
export default connect(mapStateToProps)(CarServices);