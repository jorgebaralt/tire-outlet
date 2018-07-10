import React, {Component} from 'react'
import { Card, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {selectMenuOption} from "../actions";
import SnapBanner from './SnapBanner'
import TireOutletLogo from '../images/TireOutletLogo.jpeg';
import TireOutletMap from './TireOutletMap';

const {Meta} = Card;

class Home extends Component{

    renderServices(){
        const {services} = this.props;
        return services.map((service)=>{
            return(
                <Link to={service.url} key={service.key}>
                    <Col  className={'home-service'} xs={8} sm={8} md={8} lg={4} xl={4} onClick={() =>{this.props.selectMenuOption(service.key)}}>
                        <Card
                            hoverable
                            style={{ minWidth: 'auto',maxWidth:'auto',Height:'auto', minHeight:'20vw'}}
                            cover={<img src={service.image} alt={"Services.."}/>}
                        >
                            <Meta
                                style={{fontSize:'2vw'}}
                                description={service.title}
                            />
                        </Card>
                    </Col>
                </Link>
            )
        });
    }

    static renderSnap(){
        return(
            <Row style={{marginBottom:'5%',marginLeft:'2%',marginRight:'2%'}}>
                <Col xl={12} m={24}>
                    <SnapBanner/>
                </Col>
                <Col xl={12} m={24}>
                    <div style={{marginLeft:'5%',marginTop:'3%'}}>
                        <h4 className={'snap-list'}><span className={'snap-bold'}>Financing with Snap!</span> Up to 80% Approval Rate</h4>
                        <h4 className={'snap-list'}><span className={'snap-bold'}>Apply Today</span> Bad Credit or No Credit? is OK!</h4>
                        <h4 className={'snap-list'}><span className={'snap-bold'}>You can Finance up to $3000 Today</span>, And Shop Right Away</h4>
                        <h4 className={'snap-list'}><span className={'snap-bold'}>Buy today</span>. Pay over 12 months.</h4>
                    </div>
                </Col>
            </Row>
        )
    }

    static renderInformationAndAddress(){
        return(
            <Row>

                    <Card title="Contact us" style={{ width: 'auto', height:'auto',fontSize:'1.5vw', margin:'2%'}}>
                        <p><strong>Phone number:</strong> 407-888-9918 </p>
                        <p><strong>Email:</strong> tireoutletfl@gmail.com</p>

                    </Card>


                    <Card title="Direction" style={{width:'auto', height:'auto', fontSize:'1.5vw', margin:'2%'}}>
                        <p><strong>Address:</strong> 5495 S Orange Blossom Trail, Orlando, FL 32839 </p>

                        <TireOutletMap
                            googleMapURL="maps.googleapis.com/maps/api/js?key=AIzaSyBieffVTLc-p8XOjrrtNBb-JJhjwSp_2fQ"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />


                    </Card>

            </Row>
        )
    }

    render(){
        return(
            <div id={'home-test'}>

                <div><img src={TireOutletLogo} alt="Logo" id={'logo_img'}/></div>

                <h1 className={"page-title"}>Welcome to Tire Outlet, We offer the following Services</h1>

                <Row className={"home-services"}>
                    {this.renderServices()}
                </Row>
                <h1 className={"page-title"}> We also Offer Financing: </h1>
                {Home.renderSnap()}

                <h1 className={"page-title"}> Information and Address </h1>
                {Home.renderInformationAndAddress()}


            </div>
        )
    };
}
function mapStateToProps(state){
    return{
        services: state.services
    }
}

export default connect(mapStateToProps,{selectMenuOption})(Home);