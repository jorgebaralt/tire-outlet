import React, {Component} from 'react';
import '../App.css'
import Home from './Home';
import CarServices from './CarServices';
import OilChange from './OilChange';
import {selectMenuOption} from "../actions";
import {connect} from 'react-redux';
import { Layout, Menu, Icon, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu} = Menu;


class App extends Component{
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
              <Sider className="sider" style={siderStyle}>
                  {/*TODO : maybe logo here*/}
                  <div className="logo">Tire Outlet Logo</div>

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

                  <Header style={headerStyle}>
                      <div>
                          <span id={"header-title"}>Tire Outlet Truck Bus & Car</span>
                          <span id={"header-login"}> <Button>Admin Login</Button></span>
                      </div>
                  </Header>

                  <Content style={contentStyle}>
                      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
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
                      Tire Outlet Truck Bus & Car @2018 by Jorge Baralt
                  </Footer>
              </Layout>
          </Layout>
      )
    }
}
const styles={
    siderStyle:{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0
    },
    layoutStyle:{
        marginLeft: 200
    },
    headerStyle:{
        background: '#fff',
        padding: 0
    },
    contentStyle:{
        margin: '24px 16px 0',
        overflow: 'initial'
    },
    footerStyle:{
        textAlign: 'center'
    }
};

function mapStateToProps(state){
    return{
        selectedMenu : state.selectedMenu
    }
}

export default connect(mapStateToProps,{selectMenuOption})(App)
