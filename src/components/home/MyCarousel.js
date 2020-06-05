import React, {Component} from 'react'
import {Carousel} from 'antd'

import './MyCarousel.css'

export default class MyCarousel extends Component{

    render() {
        return(
            <div>
                <Carousel autoplay style={{height:'400',width:'300',backgroundColor:"red"}}>
                    <div>
                        <h3>图1</h3>
                    </div>
                    <div>
                        <h3>图2</h3>
                    </div>
                    <div>
                        <h3>图3</h3>
                    </div>
                    <div>
                        <h3>图4</h3>
                    </div>
                    <div>
                        <h3>图4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}
