import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import Jumbotron from './Jumbotron';
import Lift1 from '../images/Lift1.jpeg';
import Lift2 from '../images/Lift2.jpeg';
import Lift3 from '../images/Lift3.jpeg';
import Lift4 from '../images/Lift4.jpeg';
import Lift5 from '../images/Lift5.jpeg';
import Lift6 from '../images/Lift6.jpeg';
import Lift7 from '../images/Lift7.jpeg';
import Lift8 from '../images/Lift8.jpeg';
import Lift9 from '../images/Lift9.jpeg';
import Wheels1 from '../images/Wheels1.jpeg';
import Wheels2 from '../images/Wheels2.jpeg';
import Wheels3 from '../images/Wheels3.jpeg';
import ImageZoom from 'react-medium-image-zoom'

class LiftingKit extends Component {
    renderWhyLift() {
        return this.props.whyLift.map((reason) => {
            return (
                <Row key={reason.title}>

                    <Card style={{ margin: '0 auto 1%', maxWidth: 900 }}>
                        <Col xxl={14}><h2>{reason.title}</h2></Col>
                        <Col xxl={10}><p className={'reasons-p'}>{reason.description}</p></Col>
                    </Card>

                </Row>
            );
        });
    }

    renderImages() {
        return (
            <Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift1,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift8,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift2,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift4,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift5,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift6,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Wheels1,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Wheels2,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Wheels3,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift7,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift3,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                    <Col xxl={8} md={8} s={24}>
                        <ImageZoom
                            image={{
                                src: Lift9,
                                alt: 'Example 1',
                                className: 'work-img grow',
                            }}
                        />
                    </Col>
                </Row>
            </Row>
        );
    }

    render() {
        return (
            <div>
                <Jumbotron title='Lifting Kits' description='We offer Big Tires, Suspension, Body Lifting, Wheels, of any type, brand. Feel free to come and ask for our prices and help' />
                <h1>Why Should I Lift My Truck?</h1>
                <hr />
                {this.renderWhyLift()}
                <h1> GALLERY </h1>
                <hr />
                {this.renderImages()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        whyLift: state.whyLift
    };
}

export default connect(mapStateToProps)(LiftingKit);