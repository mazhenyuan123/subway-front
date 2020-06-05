import React, {Component} from 'react'
import {Collapse} from 'antd'
import Warning from "./Warning";
const {Panel} = Collapse

export default class MyPanel extends Component{


    render() {
        return(
            <div>
                <Collapse defaultActiveKey={['1','2','3']}>
                    <Panel header="当前综合预警" key="1">
                        <p>暂无综合预警</p>
                    </Panel>
                    <Panel header="当前巡视预警" key="2">
                        <p>暂无巡视预警</p>
                    </Panel>
                    <Panel header="当前监测预警" key="3">
                        <Warning/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
