import React, {Component} from 'react'

import {Row,Col,Select,Input,Button,Table,DatePicker} from 'antd'

const {Option} = Select

const dataSource = [
    {
        key: '1',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '2',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '3',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '4',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '5',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '6',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '7',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '8',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '9',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '10',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '11',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '12',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '13',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '14',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
    {
        key: '15',
        sort:'盾构资料',
        name: '盾构始发与到达端头底层加固质量评价表',
        company: '中铁二局集团有限公司',
        time: '2019-04-02 15:40:06',
        upload: '赛瑞斯（7号线东延02总监办）',
    },
];

const columns = [
    {
        title: '',
        width: 50,
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: '资料类型',
        width: 100,
        dataIndex: 'sort',
        key: 'sort',
    },
    {
        title: '文件名',
        width: 300,
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '编制单位',
        width: 200,
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: '上传时间',
        width: 200,
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '上传单位',
        width: 240,
        dataIndex: 'upload',
        key: 'upload',
    },
    {
        title: '阅读|下载',
        width: 100,
        dataIndex: 'read',
        key: 'read',
        render:()=><a>阅读</a>
    },
    {
        title: '详情',
        width: 100,
        dataIndex: 'detail',
        key: 'detail',
        render:()=><a>详情</a>
    },

];



export default class MyFile extends Component{

    render() {
        return(
            <div>
                <Row>
                    <Col span={10} offset={2}>
                        选择时间:
                        <DatePicker/>
                        至
                        <DatePicker/>
                    </Col>
                    <Col span={10}>
                        按:
                        <Select defaultValue="1" style={{ width: 100 }}>
                            <Option value="1">文件名</Option>
                            <Option value="2">上传单位</Option>
                        </Select>
                        查询:
                        <Input style={{width:200}}/>
                        <Button type='primary'>查询</Button>
                    </Col>
                    <Col span={1}>
                        <Button type='primary'>上传</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table dataSource={dataSource} columns={columns} scroll={{x:1300}}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
