import React, { Component } from 'react'   //react.PropTypes
import PropTypes from "prop-types"

// react早版本
/*context的最常用法*/
//父组件
export default class Test extends Component {
    state = {
        name: 'may22222222222'
    }
    static childContextTypes = {
        name: PropTypes.string,
        changeName: PropTypes.func,
    }
    getChildContext(){
        return {
            name: this.state.name,
            changeName: this.changeName
        }
    }
    changeName = (name) => {
        this.setState({name})
    }
    render() {
        return (
            <div>
                父组件
                <Son />
            </div>
        )
    }
}
//子
class Son extends Component {

    render() {
        return (
            <div>
                子组件
                <Grandson />
                <Grandson2 />
                <ChildComponent />
            </div>
        )
    }
}
//孙
class Grandson extends Component{
    static contextTypes = {
        name: PropTypes.string,
        changeName: PropTypes.func
    }
    switch = () => {
        this.context.changeName("明月")
    }
    render(){
        return(
            <div>
                孙
                <p>{this.context.name}</p>
                <button onClick={this.switch}>切换名字</button>
            </div>
        )
    }
}
const Grandson2 = (props, context) => {
    const change = () => {
        context.changeName("moon")
    }
    return(
        <div>
            孙-2
            <p>{context.name}</p>
            <button onClick={change}>切换名字</button>
        </div>
    )
}
Grandson2.contextTypes = {
    name: PropTypes.string,
    changeName: PropTypes.func
}

const ChildComponent = (props, context) => {
  const {
    name
  } = context
    
  console.log(`context.propA = ${name}`)  // context.propA = propA
    
  return <div>aa</div>
}
  
ChildComponent.contextTypes = {
  name: PropTypes.string    
}


/*antd的国际化也是用了context的特性 */
// import zhCN from 'antd/es/locale/zh_CN';

// return (
//   <ConfigProvider locale={zhCN}>
//     <App />
//   </ConfigProvider>
// );



/* 源码 ant-design-master/components/ConfigContext */
/* 生产者 index.tsx ---接口：antLocale  => LocaleReceiver.jsx => 第三个参数 */
/* 消费者 LocaleReceiver.tsx*/


/* react官方cp之一 redux */