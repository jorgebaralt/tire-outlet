import React, { Component } from 'react';
import { Row, Col, Card, List } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import Jumbotron from './Jumbotron';
import { selectOilOption } from '../actions/OilActions';

class OilChange extends Component {
	renderOilChangeOptions() {
		return (
			<List
				size="large"
				header={<h1 style={{ fontSize: 22 }}>Choose Your Oil</h1>}
				style={{
					width: '80%',
					align: 'center',
					float: 'none',
					margin: '0 auto'
				}}
				className="box-shadow"
				bordered
				dataSource={this.props.oilOptions}
				renderItem={(item) => {
					if (item.id === this.props.selectedOil.id) {
						return (
							<ScrollAnimation animateIn="bounce" animateOnce duration={0.5}>
								<Card title={item.title} headStyle={{ fontSize: 20 }}>
									<p style={{ fontSize: 16 }}>{item.description}</p>
									<p style={{ fontSize: 18, color: '#F9A825' }}>{item.price}</p>
								</Card>
							</ScrollAnimation>
							
						);
					}
					return (
						<List.Item
							key={item.id}
							style={{ margin: 5, fontSize: 20 }}
							onClick={() => {
								this.props.selectOilOption(item.id);
							}}
							className="oil-list"
						>
							{item.title}
						</List.Item>
					);
				}}
			/>
		);
	}

	render() {
		return (
			<div>
				<Jumbotron
					title="Oil Service"
					description="The blood of your vehicle"
				/>
				<ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
					<Row>
						<Col xl={12} sm={24} style={{ marginBottom: '5%', marginTop: '2%' }}>
							{this.renderOilChangeOptions()}
						</Col>
						<Col xl={12} sm={24} id="why-oil">
							<h4 style={{ marginBottom: '5%' }}>
								{' '}
								Why Should I Change Car Oil?{' '}
							</h4>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									{' '}
									1 - Maintains engine lubrication
								</li>
								<li className="list-group-item">
									{' '}
									2 - Cools engine components
								</li>
								<li className="list-group-item">
									{' '}
									3 - Removes engine wear particles and sludge
								</li>
								<li className="list-group-item"> 4 - Improves gas mileage</li>
								<li className="list-group-item">
									{' '}
									5 - Promotes vehicle longevity
								</li>
							</ul>
						</Col>
					</Row>
				</ScrollAnimation>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		oilOptions: state.oilOptions,
		selectedOil: state.selectedOil
	};
}
export default connect(
	mapStateToProps,
	{ selectOilOption }
)(OilChange);
