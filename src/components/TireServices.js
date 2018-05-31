import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Row,Col,Card} from 'antd'

class CarServices extends Component{

    renderTireServices(){
        return this.props.tireServices.map((service) =>{
            return(
                <Row key={service.id}>
                        <Card style={{ width: 'auto', margin:8 }}>
                            <Col xxl={2}>
                                <div>img here</div>
                            </Col>
                            <Col xxl={14}>
                                <h4>{service.title}</h4>
                                <div className={'tire-service-price'}>Price : {service.price}</div>
                            </Col>
                            <Col xxl={8}>
                                <div>{service.description}</div>
                            </Col>
                        </Card>
                </Row>
            )
        })
    }

    render(){
        return(
            <div id={'tire-services'}>
                <h1>Tire Services</h1>
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