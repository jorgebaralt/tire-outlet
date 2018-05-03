import React, {Component} from 'react'
import {Carousel} from 'antd'
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
            </div>

        )

    };
}

export default Home;