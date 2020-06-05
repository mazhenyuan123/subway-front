import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap'


export default class MyEcharts extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        // 初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '10023历史测量曲线'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: this.props.data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -5,
                    lte: 0,
                    color: '#096'
                }, {
                    gt: -10,
                    lte: -5,
                    color: '#ffde33'
                }, {
                    gt: -15,
                    lte: -10,
                    color: '#ff9933'
                }, {
                    gt: -20,
                    lte: -15,
                    color: '#cc0033'
                }, {
                    gt: -25,
                    lte: -20,
                    color: '#660099'
                }, {
                    lte: -25,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: '本日测量值',
                type: 'line',
                data: this.props.data.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: -5
                    }, {
                        yAxis: -10
                    }, {
                        yAxis: -15
                    }, {
                        yAxis: -20
                    }]
                }
            }
        });
    }

    componentDidMount() {
        // 初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '10023历史测量曲线'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: this.props.data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -5,
                    lte: 0,
                    color: '#096'
                }, {
                    gt: -10,
                    lte: -5,
                    color: '#ffde33'
                }, {
                    gt: -15,
                    lte: -10,
                    color: '#ff9933'
                }, {
                    gt: -20,
                    lte: -15,
                    color: '#cc0033'
                }, {
                    gt: -25,
                    lte: -20,
                    color: '#660099'
                }, {
                    lte: -25,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: '本日测量值',
                type: 'line',
                data: this.props.data.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: -5
                    }, {
                        yAxis: -10
                    }, {
                        yAxis: -15
                    }, {
                        yAxis: -20
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div id="main" style={{ width: '100%', height: 500 }}>
            </div>
        );
    }
}

