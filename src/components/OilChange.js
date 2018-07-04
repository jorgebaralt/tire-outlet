import React, {Component} from 'react'
import Jumbotron from './Jumbotron';
import {Row, Col,Card,List} from 'antd';
import {connect} from 'react-redux'
import {selectOilOption} from "../actions/OilActions";

class OilChange extends Component{
    renderOilChangeOptions(){
           return(
               <List
                   size="large"
                   header={<h1 style={{fontSize:'4vw'}}>Choose Your Oil</h1>}
                   style={{width:'80%',align:'center',float:'none',margin:'0 auto'}}
                   bordered
                   dataSource={this.props.oilOptions}
                   renderItem={item => {
                           if(item.id === this.props.selectedOil.id){
                               return(
                                       <Card title={item.title} style={{fontSize:'1vw'}}>
                                           <p style={{fontSize:'1vw'}}>{item.description}</p>
                                           <p style={{fontSize:'1vw'}}>{item.price}</p>
                                       </Card>
                               )
                           }
                           else{
                           return(
                               (
                                   <List.Item key={item.id} style={{margin:5}} onClick={()=>{this.props.selectOilOption(item.id)}} className={'oil-list'} >
                                       {item.title}
                                   </List.Item>
                               )
                           )}
                        }
                   }
               />
           )
    }
    render(){
        return(
            <div>
                <Jumbotron title={"Oil Service"} description={"The blood of your vehicle"}/>
                <Row>
                    <Col xl={12} sm={24}>
                        {this.renderOilChangeOptions()}
                    </Col>
                    <Col xl={12} sm={24} id={'why-oil'} >
                        <h1 style={{fontSize:'3vw'}}> Why Should I Change Car Oil? </h1>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item"> 1 - Maintains engine lubrication</li>
                            <li className="list-group-item"> 2 - Cools engine components</li>
                            <li className="list-group-item"> 3 - Removes engine wear particles and sludge</li>
                            <li className="list-group-item"> 4 - Improves gas mileage</li>
                            <li className="list-group-item"> 5 - Promotes vehicle longevity</li>
                        </ul>
                    </Col>

                </Row>
            </div>
        )
    };

}
function mapStateToProps(state){
    return{
        oilOptions: state.oilOptions,
        selectedOil: state.selectedOil
    }
}
export default connect(mapStateToProps,{selectOilOption})(OilChange);