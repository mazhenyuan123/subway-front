import React, {Component} from 'react'

import{Card,Col,Row,Input,Button,Modal} from 'antd'
import subway from './2.jpg'
import Axios from 'axios'
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import MyEcharts from "./MyEcharts";
import MyCanvas from "./MyCanvas";

import {baseUrl} from "../global";
export default class MyGis extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }
    handleCharts=()=>{
        Axios.post(baseUrl+'/point/selectHistoryById',{
            id:1
        }).then(res=>{
            console.log(res)
            let arr = [];
            for(var i in res){
                arr.push(res[i].time)
            }
            console.log(arr)
        })
        this.setState({
            visible:true
        })
    }

    render() {
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
               <MyCanvas onClick={this.handleCharts}/>
            </div>
        )
    }
}
