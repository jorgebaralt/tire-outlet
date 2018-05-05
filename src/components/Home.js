import React, {Component} from 'react'
import {Carousel, Card, Row,Col} from 'antd';


import oil from '../images/oil.jpg';

const {Meta} = Card;

class Home extends Component{
    renderServices(){
        return(
            <Col>
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img src={oil}/>}
                >
                    <Meta
                        title="Oil Change"
                        description="Services/Oil Change"
                    />
                </Card>
            </Col>
        )
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

                <Row>
                    {this.renderServices()}
                </Row>

            </div>

        )

    };
}

export default Home;