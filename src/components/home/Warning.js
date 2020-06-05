import React, {Component} from 'react'

import {Table} from 'antd'

const {Column} = Table

const data = [
    {
        key: '1',
        data: '第三方',
        yellow: 123,
        orange: 323,
        red:123
    }
];

const columns = [
    { title: '来源', dataIndex: 'data', key: '1' ,width:100},
    { title: '黄色', dataIndex: 'yellow', key: '2'  ,width:100},
    { title: '橙色', dataIndex: 'orange', key: '3'  ,width:100},
    { title: '红色', dataIndex: 'red', key: '4'  ,width:100},
]
export default class Warning extends Component {


    render() {
        return (
            <div>
                <Table dataSource={data} columns={columns} pagination={false}/>
            </div>
        )
    }
}
