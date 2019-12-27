import React, { Component } from 'react'
import { } from 'antd'

class Provider extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Provider-A"
    }
  }
  render(){
    return this.props.render(this.state.name)
  }
}

class A extends Component{
 render(){
    return (
    <div>{this.props.data}</div>
    )
  }
}
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  get value(){
    return '1'
  }
  
  render() { /* 如果在基类LoaingComponent和父类User都是用render, 父类的render会覆盖基类的render。需要再父类中使用super.render()*/
    
    return (
      <div>
        User - {this.value}
         
         <Provider render={(data) => <A data={data} />} />
       </div>
    )
  }
}


export default User
