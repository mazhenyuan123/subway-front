import React, {Component} from 'react'

import {Modal,Popover} from'antd'
import Axios from 'axios'

import subway from'./2.jpg'
import icon1 from './icon.png'
import MyEcharts from "./MyEcharts";

import {baseUrl} from "../global";
const content1 = (
    <div>
        <p>测点1</p>
    </div>
);
const content2 = (
    <div>
        <p>测点2</p>
    </div>
);
const content3 = (
    <div>
        <p>测点3</p>
    </div>
);
export default class MyCanvas extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false,
            data:[]
        }
    }
    handleCharts=(id)=>{
        Axios.get(baseUrl+'/point/selectHistoryById?id='+id,{
        }).then(res=>{
            console.log(res)
            let arr = [];
            let all = []
            for(var i in res.data){
                arr.push(res.data[i].time,res.data[i].value)
                all.push(arr)
                arr = []
            }
            console.log(all)
            this.setState({
                data: all,
                visible: true

            })
        })

    }
    render() {
        return(
            <div>
                <svg  viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <image xlinkHref={subway} x="0" y="0"/>
                    <Popover content={content1} title="测点1" trigger="hover">
                        <circle cx="25" cy="25" r="2" fill="red" onClick={this.handleCharts.bind(this,1)}/>
                    </Popover>
                    <Popover content={content2} title="测点2" trigger="hover">
                    <circle cx="50" cy="25" r="2" fill="red" onClick={this.handleCharts.bind(this,2)}/>
                    </Popover>
                    <Popover content={content3} title="测点3" trigger="hover">
                    <circle cx="25" cy="50" r="2" fill="red" onClick={this.handleCharts.bind(this,3)}/>
                    </Popover>
                </svg>
                <Modal
                    style={{ top: 20}}
                    width={1240}
                    visible={this.state.visible}
                    footer={null}
                    onOk={() => this.setState({visible:false,data:[]})}
                    onCancel={() => this.setState({visible:false,data:[]})}
                >
                    <MyEcharts data={this.state.data}/>
                </Modal>
            </div>
            )
    }
}
