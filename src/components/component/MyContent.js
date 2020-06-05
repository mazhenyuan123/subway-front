import React, {Component} from 'react'
import {Tabs} from 'antd'
import MyIntroduction from "./MyIntroduction";
import DataUpload from "./DataUpload";
import MyDatabase from "./MyDatabase";
import MyFile from "./MyFile";
import MyGis from "./MyGis";
const {TabPane} = Tabs

export default class MyContent extends Component{

    render() {
        return(
            <Tabs defaultActiveKey="1">
                <TabPane tab="工点简介" key="1">
                    <MyIntroduction/>
                </TabPane>
                <TabPane tab="坐标图" key="2">
                    <MyGis/>
                </TabPane>
                <TabPane tab="监测数据" key="3">
                    <DataUpload/>
                </TabPane>
                <TabPane tab="测点库" key="4">
                    <MyDatabase/>
                </TabPane>
                <TabPane tab="工程资料" key="5">
                    <MyFile/>
                </TabPane>
            </Tabs>
        )
    }
}

