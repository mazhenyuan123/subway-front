import React, {Component} from 'react'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter,Redirect } from 'react-router-dom';
import "./MyLogin.css"

class MyLogin extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(values.userName =='admin'&&values.password =='admin'){
                console.log('yea')
                document.cookie=`login=true,role=super`
            }
            this.props.history.push("/home")
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h1 style={{textAlign:'center'}}>轨道工程施工监控系统</h1>
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '用户名不能为空！' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空！' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(MyLogin);
export default withRouter(WrappedNormalLoginForm)
