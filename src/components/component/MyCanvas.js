import React, {Component} from 'react'

import {Modal,Popover} from'antd'
import Axios from 'axios'

import subway from'./pic.png'
import icon1 from './icon.png'
import MyEcharts from "./MyEcharts";

import {baseUrl} from "../global";
const content1 = (
    <div>
        <p>测点</p>
    </div>
);
const content2 = (
    <div>
        <p>测点</p>
    </div>
);
const content3 = (
    <div>
        <p>测点</p>
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
                    <image xlinkHref={subway} x="0" y="0" height="400" width="400"/>
                    <Popover content={content1} title="DBC-1-1" trigger="hover">
                        <circle cx="193" cy="153" r="2" fill="red" onClick={this.handleCharts.bind(this,1)}/>
                    </Popover>
                    <Popover content={content2} title="DBC-1-2" trigger="hover">
                        <circle cx="193" cy="125" r="2" fill="red" onClick={this.handleCharts.bind(this,2)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-1-3" trigger="hover">
                        <circle cx="193" cy="94" r="2" fill="red" onClick={this.handleCharts.bind(this,3)}/>
                    </Popover>
                    <Popover content={content1} title="DBC-1-4" trigger="hover">
                        <circle cx="193" cy="48" r="2" fill="red" onClick={this.handleCharts.bind(this,4)}/>
                    </Popover>
                    <Popover content={content2} title="DBC-2-1" trigger="hover">
                        <circle cx="151" cy="157" r="2" fill="red" onClick={this.handleCharts.bind(this,5)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-2-2" trigger="hover">
                        <circle cx="99" cy="157" r="2" fill="red" onClick={this.handleCharts.bind(this,6)}/>
                    </Popover>
                    <Popover content={content1} title="DBC-2-3" trigger="hover">
                        <circle cx="151" cy="264" r="2" fill="red" onClick={this.handleCharts.bind(this,7)}/>
                    </Popover>
                    <Popover content={content2} title="DBC-2-4" trigger="hover">
                        <circle cx="96" cy="264" r="2" fill="red" onClick={this.handleCharts.bind(this,8)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-3-1" trigger="hover">
                        <circle cx="193" cy="273" r="2" fill="red" onClick={this.handleCharts.bind(this,9)}/>
                    </Popover>
                    <Popover content={content1} title="DBC-3-2" trigger="hover">
                        <circle cx="193" cy="303" r="2" fill="red" onClick={this.handleCharts.bind(this,10)}/>
                    </Popover>
                    <Popover content={content2} title="DBC-3-3" trigger="hover">
                        <circle cx="192" cy="335" r="2" fill="red" onClick={this.handleCharts.bind(this,11)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-3-4" trigger="hover">
                        <circle cx="192" cy="374" r="2" fill="red" onClick={this.handleCharts.bind(this,12)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-4-1" trigger="hover">
                        <circle cx="237" cy="206" r="2" fill="red" onClick={this.handleCharts.bind(this,13)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-4-2" trigger="hover">
                        <circle cx="260" cy="206" r="2" fill="red" onClick={this.handleCharts.bind(this,14)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-4-3" trigger="hover">
                        <circle cx="289" cy="206" r="2" fill="red" onClick={this.handleCharts.bind(this,15)}/>
                    </Popover>
                    <Popover content={content3} title="DBC-4-4" trigger="hover">
                        <circle cx="318" cy="206" r="2" fill="red" onClick={this.handleCharts.bind(this,16)}/>
                    </Popover>
                    <Popover content={content3} title="SKQL-1" trigger="hover">
                        <circle cx="193" cy="175" r="2" fill="red" onClick={this.handleCharts.bind(this,17)}/>
                    </Popover>
                    <Popover content={content3} title="SKQL-2" trigger="hover">
                        <circle cx="169" cy="208" r="2" fill="red" onClick={this.handleCharts.bind(this,18)}/>
                    </Popover>
                    <Popover content={content3} title="SKQL-3" trigger="hover">
                        <circle cx="193" cy="247" r="2" fill="red" onClick={this.handleCharts.bind(this,19)}/>
                    </Popover>
                    <Popover content={content3} title="SKQL-4" trigger="hover">
                        <circle cx="216" cy="207" r="2" fill="red" onClick={this.handleCharts.bind(this,20)}/>
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
