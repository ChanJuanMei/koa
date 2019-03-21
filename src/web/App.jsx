import React, { Component } from 'react';
import MainLayout from './layout/MainLayout';

class App extends Component{
  render (){
    return <MainLayout>{children}</MainLayout>
  }
}
export default App