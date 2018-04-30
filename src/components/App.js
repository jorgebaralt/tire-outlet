import React, {Component} from 'react';
import '../App.css'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class app extends Component{
    onMenuClicked({key}){
        console.log( key+ "selected")

    }
    renderContent(){
        return(<div>Select what to render</div>)
    }

    render(){
        const {siderStyle,headerStyle,contentStyle,layoutStyle,footerStyle} = styles;
      return(
          <Layout>
              <Sider className="sider" style={siderStyle}>
                  {/*TODO : maybe logo here*/}
                  <div className="logo">Tire Outlet Logo</div>

                  <Menu className="menu" mode="inline" onSelect={this.onMenuClicked.bind(this)} defaultSelectedKeys={['home']} >
                      <Menu.Item key="home">
                          <Icon type="home" />
                          <span className="nav-text">Home</span>
                      </Menu.Item>
                      <Menu.Item key="2">
                          <Icon type="video-camera" />
                          <span className="nav-text">nav 2</span>
                      </Menu.Item>

                  </Menu>
              </Sider>

              <Layout style={layoutStyle}>

                  <Header style={headerStyle}>
                      <div className={"header-title"}>TireOutlet</div>
                  </Header>

                  <Content style={contentStyle}>
                      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                          {this.renderContent()}
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
