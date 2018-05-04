import React, {Component} from 'react';
import '../App.css'
import Home from './Home';
import CarServices from './CarServices';
import OilChange from './OilChange';
import {selectMenuOption} from "../actions";
import {connect} from 'react-redux';
import { Layout, Menu, Icon, Button, BackTop ,Row, Col } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu} = Menu;


class App extends Component{
    // react state to handle the sider collapse
    state={
        collapse:false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onMenuClicked({key}){
        this.props.selectMenuOption(key);
    }

    renderContent(){
        const {selectedMenu} = this.props;
        switch (selectedMenu){
            case 'home':
                return(<Home/>);
            case 'oilChange':
                return(<OilChange/>);
            case 'carServices':
                return(<CarServices/>);
            default:
                return(<div>Please Select from Menu</div>);
        }
    }

    render(){
        const {siderStyle,headerStyle,contentStyle,layoutStyle,footerStyle} = styles;

      return(

          <Layout>
              {/*Navigate up button*/}
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
              >
                  {/*TODO : maybe logo here*/}
                  <div className="logo">Tire Outlet</div>

                  <Menu className="menu" mode="inline" onClick={this.onMenuClicked.bind(this)} defaultSelectedKeys={['home']} >
                      <Menu.Item key="home">
                          <Icon type="home" />
                          <span className="nav-text">Home</span>
                      </Menu.Item>
                      <SubMenu
                          key="Services"
                          title={<span><Icon type="setting" /><span>Services</span></span>}
                      >
                          <Menu.Item key="oilChange"><Icon type="filter"/>Oil Change</Menu.Item>
                          <Menu.Item key="carServices"><Icon type="sync"/>Car Services</Menu.Item>
                      </SubMenu>
                  </Menu>
              </Sider>

              <Layout style={layoutStyle}>
                  <div>
                      <Header style={headerStyle}>
                        <Row>
                            <Col span={6}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Col>
                            <Col span={18}> <span id={"header-title"}>Tire Outlet Truck Bus & Car</span></Col>

                        </Row>
                      </Header>
                  </div>

                  <Content style={contentStyle}>
                      <div>
                          {this.renderContent()}
                          ...
                          <br />
                          Really
                          <br />...<br />...<br />...<br />
                          long
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />...
                          <br />...<br />...<br />...<br />...<br />...<br />
                      </div>
                  </Content>

                  <Footer style={footerStyle}>
                      <div>Tire Outlet Truck Bus & Car @2018 by Jorge Baralt</div>
                      {/*<a href='https://www.freepik.com/free-vector/car-repair-icons_1011157.htm'>Icons Designed by Freepik</a>*/}
                  </Footer>
              </Layout>
          </Layout>
      )
    }
}
const styles={
    siderStyle:{
        overflow: 'auto',
        left: 0,
    },
    headerStyle:{
        background: '#fff',
        padding: 0
    },
    contentStyle:{
        margin: '24px 16px',
        padding: 24,
        background:'#fff',
        textAlign: 'center'
    },
    footerStyle:{
        textAlign: 'center'
    },
};

function mapStateToProps(state){
    return{
        selectedMenu : state.selectedMenu
    }
}

export default connect(mapStateToProps,{selectMenuOption})(App)
