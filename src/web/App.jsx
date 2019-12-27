import React, { Component } from 'react';
import MainLayout from './layout/MainLayout';
// import AppLayout from './layout/AppLayout';
// import AddOn from './slot/AddOn'

class App extends Component{
  render (){
    return <MainLayout>{this.props.children}</MainLayout>
  }
}
export default App


/**
 * 依赖Slot -> 插槽组件，负责打桩，提供分发内容的坑位
 * AddOn -> 负责收集分发的内容，并提供给插槽组件去渲染分发内容，相当于插槽的消费者
 * AppLayout为Slot和AddOn的桥梁
 * @export
 * @class App
 * @extends {Component}
 */
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <AppLayout>
//           <AddOn slot="header">
//             这里是一个页面标题
//           </AddOn>
//           <AddOn>
//             <p>主要内容的一个段落</p>
//             <p>另一个段落</p>
//           </AddOn>
//           <AddOn slot="footer">
//             <p>这里有一些联系信息</p>
//           </AddOn>
//         </AppLayout>
//       </div>
//     )
//   }
// }

