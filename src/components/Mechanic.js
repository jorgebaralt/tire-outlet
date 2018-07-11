import React , {Component} from 'react';
import {Row, Col} from 'antd'
import {connect} from 'react-redux';
import Jumbotron from './Jumbotron'

class Mechanic extends Component{

    renderMechanicServices(){
        return this.props.mechanicServices.map((service) => {
            return(
                <Col xxl={6} lg={8} md={12} sm={24} key={service.id} >
                    <div className="card" style={{width: 'auto', margin:5,minHeight:'13vw',height:'auto'}}>
                        <div className="card-body">
                            <h5 className="card-title">{service.title}</h5>
                            <hr/>
                            <p className="card-text" style={{marginTop:20}}>{service.description}</p>
                        </div>
                    </div>
                </Col>
            )
        })
    }

    render(){
        return(
            <div>
                <Jumbotron title={"Mechanic"} description={"We offer any type of mechanic Service. If you have any doubt about your car, or want us to check it, please contact or visit us as soon as possible"}/>

                <h1>Popular Services</h1>
                <Row>
                    {this.renderMechanicServices()}
                </Row>
            </div>


        )
    }
}

function mapStateToProps(state){
    return{
        mechanicServices : state.mechanicServices
    }
}

export default connect(mapStateToProps)(Mechanic);