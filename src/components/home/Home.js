import React, {Component} from 'react'
import {Row,Col}from 'antd'

import map from'./map.jpeg'
import MyPanel from "./MyPanel";
import Carousel from "./MyCarousel";

export default class Home extends Component{

    render() {
        return(
            <div>
                <Row>
                    <Col span={18}>
                        <img src={map} style={{width:'800px',height:'600px'}}/>
                    </Col>
                    <Col span={6}>
                        <MyPanel/>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4} span={16}>
                        <Carousel/>
                    </Col>
                </Row>
            </div>
        )
    }
}

