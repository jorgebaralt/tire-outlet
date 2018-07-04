import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Row,Col,Card} from 'antd';
import Jumbotron from './Jumbotron';
import Tires1 from '../images/Tires4.jpeg'
import Tires2 from '../images/Tires5.jpeg'
import Allignment1 from '../images/Allignment.jpeg'
import Allignment2 from '../images/Allignment2.jpeg'
import TruckBalance from '../images/TruckBalance.jpeg'
import Tires3 from '../images/Tires 3.jpeg'

class CarServices extends Component{

    renderTireServices(){
        return this.props.tireServices.map((service) =>{
            return(
                <Row key={service.id}>
                        <Card style={{ width:'auto', margin:'0 auto 1%', maxWidth:1200}} >
                            <Col xxl={12}>
                                <h4 className={'service-title'}>{service.title}</h4>
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

    renderImages(){
        return(
            <Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <img src={Tires1} alt="Example 1" className={'work-img'}/>
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <img src={Allignment1} alt="Example 2" className={'work-img'}/>
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <img src={TruckBalance} alt="Example 3" className={'work-img'}/>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <img src={Tires2} alt="Example 1" className={'work-img'}/>
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <img src={Allignment2} alt="Example 2" className={'work-img'}/>
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <img src={Tires3} alt="Example 3" className={'work-img'}/>
                    </Col>
                </Row>

            </Row>
        )
    }

    render(){
        return(
            <div id={'tire-services'}>
                <Jumbotron title={'Tire Services'} description={'We offer any size, brand, and type of tire, just feel free to come and ask for them. Here are some of the Services we offer for the tires'}/>
                {this.renderTireServices()}
                <hr/>
                {this.renderImages()}
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