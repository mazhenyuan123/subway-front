import React, {Component} from 'react'

import {Typography,Table} from 'antd'

import int from './introduction.jpg'
const{Title,Paragraph,Text} = Typography

const dataSource = [
    {
        key: '1',
        num: '1',
        sort: '施工单位',
        name: '中铁二局(7号线东延04标)',
    },
    {
        key: '2',
        num: '2',
        sort: '监理单位',
        name: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '3',
        num: '3',
        sort: '设计单位',
        name: '北京市市政工程设计研究总院有限公司',
    },
    {
        key: '4',
        num: '4',
        sort: '勘查单位',
        name: '中铁第五勘察设计院集团有限公司',
    },
    {
        key: '5',
        num: '5',
        sort: '第三方监测单位',
        name: '中交路桥技术有限,中交路桥技术有限公司(7号线东延和八通线南延)',
    },
    {
        key: '6',
        num: '6',
        sort: '环境调查单位',
        name: '中铁第五勘察设计院集团有限公司)',
    },
    {
        key: '7',
        num: '7',
        sort: '咨询单位',
        name: '北京安捷工程咨询有限公司',
    },
    {
        key: '8',
        num: '8',
        sort: '咨询单位',
        name: '中国矿业大学北京',
    },
    {
        key: '9',
        num: '9',
        sort: '咨询单位',
        name: '中铁隧道集团科学技术研究院有限公司',
    },
];

const columns = [
    {
        title: '序号',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '单位类型',
        dataIndex: 'sort',
        key: 'sort',
    },
    {
        title: '单位名称',
        dataIndex: 'name',
        key: 'name',
    },
];
export default class MyIntroduction extends Component{


    render() {
        return(
            <div>
                <Typography>
                    <Title>参建单位</Title>
                    <Paragraph>
                        <Table dataSource={dataSource} columns={columns} pagination={false}/>
                    </Paragraph>
                    <Title>概述</Title>
                    <Paragraph>
                        <Text strong>
                            周围环境情况:
                        </Text>
                        线路沿群芳南街向东敷设，下穿颐瑞东路，到达与土桥车辆段西路相交路口后转向南，沿东六环西侧向南延伸，下穿萧太后河后转向西接入环球影城站。区间隧道上方的管线主要位于群芳南街路下，包括给水、污水、雨水、电信、电力、燃气等在内的数十条地下管线，控制性管线主要有1300mm污水，直径1100mm雨水，直径1000mm上水等。
                    </Paragraph>
                    <Paragraph>
                        <Text strong>
                            主体结构：
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>
                            工程地点：
                        </Text>
                        群芳南街附近
                    </Paragraph>
                    <img src={int}/>
                </Typography>
            </div>
        )
    }
}
