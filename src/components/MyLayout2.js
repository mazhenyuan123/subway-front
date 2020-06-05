import React, {Component} from 'react'
import Home from './home/Home'
import MyContent from './component/MyContent'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';


import {Layout,Breadcrumb,Menu,Icon,Row,Col,Select,Badge,Button} from 'antd'
import PrivateRoute from "./PrivateRoute";
import MyFile from "./component/MyFile";

const {Header,Footer,Content,Sider} = Layout;
const {Option} = Select

export default class MyLayout2 extends Component {

    constructor(props) {
        super(props);
        this.state={
            menus:[
                {
                    title: '首页',
                    icon: 'home',
                    key: '/home',
                },
                {
                    title: '工点信息',
                    icon: 'bulb',
                    key: '/other',
                    subs: [
                        {key: '/component1', title: '区间1', icon: 'bulb'},
                        {key: '/component2', title: '区间2', icon: 'bulb'},
                        {key: '/component3', title: '区间3', icon: 'bulb'},
                    ]
                },
                {
                    title: '台账信息',
                    icon: 'dollar',
                    key: '/info',
                    subs: [
                        {key: '/ledger', title: '仪器台账', icon: 'dollar'},
                        {key: '/danger', title: '风险台账', icon: 'dollar'},
                        {key: '/warning', title: '预警台账', icon: 'dollar'},
                    ]
                },
                {
                    title: '监测报告',
                    icon: 'file',
                    key: '/report',
                    subs: [
                        {key: '/week', title: '周报', icon: 'file'},
                        {key: '/month', title: '月报', icon: 'file'},
                        {key: '/year', title: '年报', icon: 'file'},
                        {key: '/all', title: '总结报告', icon: 'file'},
                    ]
                },
            ]
        }
    }
    handleLogout =()=>{
        document.cookie='login=false';
        document.cookie='role=false';
        window.location.reload();
    }
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key, icon, title,}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    render() {
        return(
           <Router>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Row>
                        <Col span={16}>
                            <h1 style={{color:'#fff'}}>中交基础设施养护集团轨道交通工程施工安全风险监控系统</h1>
                        </Col>
                        <Col span={4}>
                            <Select defaultValue="7" style={{ width: 120 }}>
                                <Option value="7">7号线</Option>
                                <Option value="x">x号线</Option>
                                <Option value="y">
                                    y号线
                                </Option>
                            </Select>
                        </Col>
                        <Col span={4}><Button type='primary' onClick={this.handleLogout}>退出登录</Button></Col>
                    </Row>
                </Header>
                <Content style={{ padding: '0 50px' }}>

                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                {
                                    this.state.menus.map(item => {
                                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                                    })
                                }
                            </Menu>
                        </Sider>

                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <PrivateRoute path='/home/' component={Home}/>
                            <PrivateRoute path='/component1' component={MyContent}/>
                            <PrivateRoute path='/component2' component={MyContent}/>
                            <PrivateRoute path='/component3' component={MyContent}/>
                            <PrivateRoute path='/ledger/' component={MyFile}/>
                            <PrivateRoute path='/danger' component={MyFile}/>
                            <PrivateRoute path='/warning' component={MyFile}/>
                            <PrivateRoute path='/week' component={MyFile}/>
                            <PrivateRoute path='/month/' component={MyFile}/>
                            <PrivateRoute path='/year' component={MyFile}/>
                            <PrivateRoute path='/all' component={MyFile}/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Xyxyzka</Footer>
            </Layout>
    </Router>
        )
    }
}
