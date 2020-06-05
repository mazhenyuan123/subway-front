import React, {Component} from 'react'

import {baseUrl} from "../global";
import {Row,Col,Select,Input,Button,Table,Tag} from 'antd'
import Axios from 'axios'
const {Option} = Select

export default class MyDatabase extends Component{

    constructor(props) {
        super(props);
        this.state={
            dataSource:[]
        }
    }
    componentDidMount() {
        this.selectAll()
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.selectAll()
    // }

    selectAll=()=>{
        Axios.post(baseUrl+'/point/selectAllPoint').then(res => {
            console.log(res)
            this.setState({
                dataSource:res.data
            });
            console.log(this.state.dataSource)
        });
    }

    render() {
        const columns = [
            {
                title: '测点名称',
                width: 100,
                dataIndex: 'name',
                key: 'name',
                fixed:'left'
            },
            {
                title: '测点类别',
                width: 100,
                dataIndex: 'sort.name',
                key: 'sort',
            },
            {
                title: '测点单位',
                width: 100,
                dataIndex: 'sort.unit',
                key: 'unit',
            },
            {
                title: '控制值',
                width: 80,
                dataIndex: 'cvalue',
                key: 'cvalue',
            },
            {
                title: '控制速率',
                width: 100,
                dataIndex: 'crate',
                key: 'crate',
            },
            {
                title: '初次测量值',
                width: 120,
                dataIndex: 'ivalue',
                key: 'ivalue',
            },
            {
                title: '初次测量时间',
                width: 140,
                dataIndex: 'idate',
                key: 'idate',
            },

            {
                title: '最近上传时间',
                width: 140,
                dataIndex: 'data.time',
                key: 'dtime',
            },
            {
                title: '最新测量值',
                width: 120,
                dataIndex: 'data.value',
                key: 'dvalue',
            },
            {
                title: '上传人员',
                width: 100,
                dataIndex: 'data.personnel',
                key: 'personnel',
            },
            {
                title: '当前安全状态',
                width: 120,
                dataIndex: 'data.safe',
                key:'safe',
                render:safe=>{
                    let color;
                    let info;
                    if(safe == 1){
                        color = 'yellow'
                        info = '黄色预警'
                    }else if (safe == 2){
                        color = 'orange'
                        info = '橙色预警'
                    }else if (safe == 3){
                        color = 'red'
                        info = '红色预警·'
                    }else{
                        color = 'green'
                        info = '安全'
                    }
                    return(
                        <Tag color={color} key={safe}>{info}</Tag>
                    )

        }
            },

            {
                title: '动作',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: () => <a>编辑</a>,
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return(
            <div>
                <Row>
                    <Col span={10} offset={12}>
                        按:
                        <Select defaultValue="1" style={{ width: 100 }}>
                            <Option value="1">测点名称</Option>
                            <Option value="2">测点类型</Option>
                            <Option value="3">监测用户类型</Option>
                            <Option value="4">测点状态</Option>
                            <Option value="5">未完善测点</Option>
                        </Select>
                        查询:
                        <Input style={{width:200}}/>
                        <Button type='primary' onClick={this.selectAll}>查询</Button>
                    </Col>
                    <Col span={1}>
                        <Button type='primary'>新增</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table rowKey={record => record.id} rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} scroll={{x:1300}}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

