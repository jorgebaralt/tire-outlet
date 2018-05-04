import React, {Component} from 'react'
import {Carousel, Card} from 'antd'
const {Meta} = Card;
class Home extends Component{

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
                <div>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="Oil" src='/src/images/oil.jpg' />}
                    >
                        <Meta
                            title="Allignment"
                            description="www.instagram.com"
                        />
                    </Card>
                </div>

            </div>

        )

    };
}

export default Home;