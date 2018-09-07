import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import '../App.css';
import { isMobile } from 'react-device-detect';
import { Layout, Menu, Icon, BackTop } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectMenuOption } from '../actions';
import CarServices from './TireServices';
import Mechanic from './Mechanic';
import LiftingKit from './LiftingKit';
import Home from './Home';
import OilChange from './OilChange';


const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    // react state to handle the sider collapse
    state = {
        collapsed: false
    };


    componentWillMount() {
        if (isMobile) {
            this.setState({ collapsed: true });
        }
    }

    render() {
        const { siderStyle, contentStyle, layoutStyle, footerStyle } = styles;
        const { selectedService } = this.props;

        return (
            // <HttpsRedirect>
                <Layout>
                {/* Navigate up button */}
                    <div>
                        <BackTop visibilityHeight={100}>
                            <div className="ant-back-top-inner">UP</div>
                        </BackTop>
                    </div>

                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        className="sider"
                        style={siderStyle}
                        breakpoin={{ xs: '600' }}

                    >
                        {/* TODO : maybe logo here */}
                        <div id="logo">Tire Outlet </div>

                        <Menu className="menu" mode="inline" selectedKeys={selectedService} defaultOpenKeys={[]} onClick={({ key }) => this.props.selectMenuOption(key)}>
                            <Menu.Item key="Home">
                                <Link to="/" className={"menu-link"}>
                                    <Icon type="home" />
                                    <span className="nav-text menu-title">
                                        Home
                                    </span>
                                </Link>
                            </Menu.Item>

                            <SubMenu
                                key="services"
                                title={<span><Icon type="setting" /><span className={'menu-title'}>Services</span></span>}
                            >
                                <Menu.Item key="Oil Change">
                                    <Link to="/services/oil-change" className={"menu-link"}>
                                        <Icon type="filter" />
                                        <span className={'menu-title'}>Oil Change</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="Tire Services">
                                    <Link to="/services/tire-services" className={"menu-link"}>
                                        <Icon type="sync" />
                                        <span className={'menu-title'}>Tire Services</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="Mechanic">
                                    <Link to="/services/mechanic" className={"menu-link"}>
                                        <Icon type="tool" />
                                        <span className={'menu-title'}>Mechanic</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="Lift Kits">
                                    <Link to="/services/lift" className={"menu-link"}>
                                        <Icon type="car" />
                                        <span className={'menu-title'}>Lifting Kit</span>
                                    </Link>
                                </Menu.Item>


                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={layoutStyle}>
                        <Content style={contentStyle}>
                            <div>
                                <Switch>
                                    <Route path="/services/oil-change" component={OilChange} />
                                    <Route path="/services/tire-services" component={CarServices} />
                                    <Route path="/services/mechanic" component={Mechanic} />
                                    <Route path="/services/lift" component={LiftingKit} />
                                    <Route path="/" component={Home} />
                                </Switch>
                            </div>
                        </Content>

                        <Footer style={footerStyle}>
                            <div>Tire Outlet Truck Bus & Car @2018 by Jorge Baralt</div>
                            <a href="https://www.freepik.com/free-vector/car-repair-icons_1011157.htm">Icons Designed by Freepik</a>
                        </Footer>
                    </Layout>
                </Layout>
            // </HttpsRedirect>
        );
    }
}
const styles = {
    siderStyle: {
        overflow: 'auto',
        left: 0,
        height: 'auto'
    },
    headerStyle: {
        background: '#fff',
        padding: 0,
    },
    contentStyle: {
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        textAlign: 'center',
        minHeight: 750
    },
    footerStyle: {
        textAlign: 'center'
    },
};

function mapStateToProps(state) {
    return {
        selectedService: state.selectedService
    };
}

export default connect(mapStateToProps, { selectMenuOption })(App);
