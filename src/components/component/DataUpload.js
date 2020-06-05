import React, {Component} from 'react'

import {Form,Icon,Input,Button,message,DatePicker,Select,Upload,Alert} from 'antd'

import axios from 'axios'

import {baseUrl} from "../global";
const {Dragger} = Upload
const {Option} = Select

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const provinceData = ['沉降监测点', '倾斜监测点','位移监测点','应力监测点','水位监测点','洞内监测点','既有线监测点'];
const cityData = {
    沉降监测点: ['地表', '管线', '建筑物', '桥梁', '基坑隆起','分层沉降'],
    倾斜监测点: ['建筑物', '桥梁'],
    位移监测点: ['桩顶水平位移', '桩体水平位移', '桩顶竖向位移'],
    应力监测点: ['钢支撑应力','锚索应力','围岩应力','孔隙水压力'],
    水位监测点: ['水位'],
    洞内监测点: ['拱顶沉降', '净空收敛'],
    既有线监测点: ['轨道沉降', '轨道水平位移', '轨距'],
};
export default class DataUpload extends Component{
    state = {
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
        fileList:[],
        uploading:false,
    };
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

// You can use any AJAX library you like
        const param = new FormData();
        param.append("file", fileList[0]);

        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        axios.post(baseUrl+"/point/import", param, config).then(res => {
            this.setState({
                fileList: [],
                uploading: false,
            });
            alert('上传成功')
        });
    };


    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        this.setState({
            secondCity: value,
        });
    };



    render() {
        const { uploading, fileList } = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };
        return(
            <div>
                <Form {...formItemLayout} className="form" >
                    <Form.Item label="测点类型">
                        <Select
                            defaultValue={provinceData[0]}
                            style={{ width: 180 }}
                            onChange={this.handleProvinceChange}
                        >
                            {provinceData.map(province => (
                                <Option key={province}>{province}</Option>
                            ))}
                        </Select>
                        <Select
                            style={{ width: 240 }}
                            value={this.state.secondCity}
                            onChange={this.onSecondCityChange}
                        >
                            {this.state.cities.map(city => (
                                <Option key={city}>{city}</Option>
                            ))}
                        </Select>

                        <Button type="primary" htmlType="submit">
                            下载模版文件
                        </Button>
                    </Form.Item>
                    <Form.Item label="监测日期">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="数据文件">
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
                        </Dragger>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                    >
                        <Button type="primary" disabled={fileList.length === 0}
                                loading={uploading} onClick={this.handleUpload}>
                            {uploading ? '上传中' : '开始上传'}
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}
