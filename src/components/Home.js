import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMenuOption } from '../actions';
import TireOutletLogo from '../images/TireOutletLogo.jpeg';
import TireOutletMap from './TireOutletMap';
import ScrollAnimation from 'react-animate-on-scroll';

const { Meta } = Card;
class Home extends Component {

    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    componentWillMount = () => {
        this.updateWindowDimensions();
        console.log(this.state);
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    };

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    renderServices = () => {
        const { services } = this.props;
        return services.map((service) => {
            return (
                <Link to={service.url} key={service.key}>
                    <ScrollAnimation animateIn='zoomIn' delay={500} animateOnce={true}>
                        <Col xs={24} sm={24} md={12} xl={6} onClick={() => { this.props.selectMenuOption(service.key); }}>
                            <Card
                                hoverable
                                style={{ boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.19)', width: 'auto', margin: '10%'}}
                                className={'grow'}
                                cover={<img src={service.image} alt={"Services.."} />}
                            >
                                <Meta
                                    style={{ fontSize: '25px', height: 50 }}
                                    title={service.title}
                                />
                            </Card>
                        </Col>
                    </ScrollAnimation>
                </Link>
            );
        });
    };

    renderSnap = () => {
        return (
            <Row style={{ marginLeft: '2%', marginRight: '2%' }}>
                <Col m={24} style={{ marginTop: '2.5%', width: '100%', height: 'auto' }}>
                    <a href="https://app.snapfinance.com/customer/application/?mid=467847527">
                        <img src="https://app.snapfinance.com/images/apply_image_13.jpeg" alt="Snap Finance - Apply Here" height="200" width="100%" />
                    </a>
                </Col>

                <div id={'snap-test'}>
                    <Row>
                        <Col xl={12}>
                            <h4 className={'snap-list'}><span className={'snap-bold'}>Financing with Snap!</span> Up to 80% Approval Rate</h4>
                            <h4 className={'snap-list'}><span className={'snap-bold '}>You can Finance up to $3000 Today</span>, And Shop Right Away</h4>
                        </Col>
                        <Col xl={12}>
                            <h4 className={this.state.width >= 1200 ? 'snap-list text-right' : 'snap-list'}><span className={'snap-bold'}>Apply Today</span> Bad Credit or No Credit? is OK!</h4>
                            <h4 className={this.state.width >= 1200 ? 'snap-list text-right' : 'snap-list'}><span className={'snap-bold'}>Buy today</span>. Pay over 12 months!</h4>
                        </Col>
                    </Row>
                </div>
            </Row>
        );
    }

    renderInformationAndAddress = () => {
        return (
            <Row>
                <ScrollAnimation animateIn='pulse' duration={2} animateOnce={true}>
                    <Card title="Contact us" style={{ width: 'auto', height: 'auto', fontSize: '20px', margin: '2%', boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.19)' }}>
                        <p><strong>Phone number:</strong> 407-888-9918 </p>
                        <p><strong>Email:</strong> tireoutletfl@gmail.com</p>
                    </Card>

                    <Card title="Direction" style={{ width: 'auto', height: 'auto', fontSize: '20px', margin: '2%', boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.19)' }} >
                        <p><strong>Address:</strong> 5495 S Orange Blossom Trail, Orlando, FL 32839 </p>

                        <TireOutletMap
                            googleMapURL="maps.googleapis.com/maps/api/js?key=AIzaSyBieffVTLc-p8XOjrrtNBb-JJhjwSp_2fQ"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                        <div style={{ marginTop: 30}}>
                            <a href='https://www.google.com/maps/search/?api=1&query=tire+outlet+truck+bus+and+car+orlando'>
                                <ScrollAnimation animateIn='jello'>
                                    <strong>
                                        Take Me There
                                    </strong>
                                </ScrollAnimation>
                            </a>
                        </div>
                    </Card>
                </ScrollAnimation>
            </Row>
        );
    };

    render() {
        return (
            <div>
                <ScrollAnimation animateIn='fadeIn' duration={3} animateOnce={true}>
                    <div><img src={TireOutletLogo} alt="Logo" id={'logo_img'}/></div>
                    <h1 style={{fontSize: 40}}> <span className={'snap-bold'}>Welcome to Tire Outlet</span> We offer the following Services</h1>
                </ScrollAnimation>


                <Row className={"home-services"}>
                    {this.renderServices()}
                </Row>

                <h1 className={"page-title"}> We also Offer Financing: </h1>

                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    {this.renderSnap()}
                </ScrollAnimation>

                <h1 className={"page-title"}> Information and Address </h1>

                {this.renderInformationAndAddress()}

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        services: state.services
    };
}

export default connect(mapStateToProps, { selectMenuOption })(Home);