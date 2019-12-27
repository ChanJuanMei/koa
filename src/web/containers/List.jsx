import React, { Component } from 'react'
// import { } from 'antd'



// const List = () => {

//   return (
//     <div>List</div>
//   )
// }

// export default List

const MyContext = React.createContext("defaultValue"); 

export default class List extends Component {
  render() {
    console.log('list');
    
    return (
      <MyContext.Provider value="test-context">
        <div>
          <A />
        </div>
      </MyContext.Provider>
    )
  }
}

class A extends Component {
  render() {
    console.log('zi');

    return (
      <div>
        <B />
      </div>
    )
  }
}

class B extends Component {
  static contextType = MyContext;
   componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    console.log('componentDidMount', value);
    
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
    console.log('componentDidUpdate', value);

  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
    console.log('componentWillUnmount', value);

  }
  
  render() {
    console.log('render', this.context);
    return (
      <div>
        {this.context}
      </div>
    )
  }
}





