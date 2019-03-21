import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './router';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class App extends React.Component {
  state = {
  };

  render() {
    const { date } = this.state;
    return (
      <LocaleProvider locale={zhCN}>
        <Router history={browserHistory} >
          {routes}
        </Router>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));