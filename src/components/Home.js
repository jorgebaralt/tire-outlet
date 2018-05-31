import React, {Component} from 'react'
import {Carousel, Card, Row,Col} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {selectMenuOption} from "../actions";
import SnapBanner from './SnapBanner'
/*global google*/
const {Meta} = Card;

class Home extends Component{
    componentDidMount(){
        const location = {lat:28.480774,lng:-81.396365};
        let map = new google.maps.Map(document.getElementById('map'),{
            zoom:15,
            center:location
        });
        new google.maps.Marker({
            position: location,
            map: map
        })
    }

    renderServices(){
        const {services} = this.props;
        return services.map((service)=>{
            return(
                <Link to={service.url} key={service.key}>
                    <Col  className={'home-service'} xs={24} sm={12} md={8} lg={8} xl={4} onClick={() =>{this.props.selectMenuOption(service.key)}}>
                        <Card
                            hoverable
                            style={{ width: 200}}
                            cover={<img src={service.image} alt={"Services.."}/>}
                        >
                            <Meta
                                title={service.title}
                                description={service.description}
                            />
                        </Card>
                    </Col>
                </Link>
            )
        });

    }
    render(){
        return(
            <div>
                <div id={"home-carousel"}>
                    <Carousel autoplay>
                        <div><h2>1</h2></div>
                        <div><h2>2</h2></div>
                        <div><h2>3</h2></div>
                    </Carousel>
                </div>

                <h1 className={"page-title"}>Welcome to Tire Outlet, We offer the following Services:</h1>

                <Row className={"home-services"}>
                    {this.renderServices()}
                </Row>

                <Row style={{marginBottom:'5%',marginLeft:'2%',marginRight:'2%'}}>
                    <Col xl={12} m={24}>
                        <SnapBanner/>
                    </Col>
                    <Col xl={12} m={24}>
                        <div style={{marginLeft:'5%',marginTop:'3%'}}>
                            <h4 className={'snap-list'}><span className={'snap-bold'}>Financing in a Snap!</span> Up to 80% Approval Rate</h4>
                            <h4 className={'snap-list'}><span className={'snap-bold'}>Apply Today</span> Bad Credit, No Credit, OK!</h4>
                            <h4 className={'snap-list'}><span className={'snap-bold'}>Finance up to $3000 Today</span>, And Shop Right Away</h4>
                            <h4 className={'snap-list'}><span className={'snap-bold'}>Buy today</span>. Pay over 12 months.</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} sm={24}>
                        <Card title="Contact us" style={{ width: 'auto', height:441,fontSize:18}}>
                            <p><strong>Phone number:</strong> 407-888-9918 </p>
                            <p><strong>Email:</strong> tireoutletfl@gmail.com</p>

                        </Card>
                    </Col>

                    <Col xl={12} sm={24}>
                        <Card title="Direction" style={{width:'auto', height:'auto', fontSize:18}}>
                            <p><strong>Address:</strong> 5495 S Orange Blossom Trail, Orlando, FL 32839 </p>
                            <div id="map"> </div>
                        </Card>
                    </Col>
                </Row>
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