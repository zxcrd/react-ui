import React, { Component } from 'react';
import {Button,message} from 'antd';
import './app.css';

export default  class App extends Component {
    click = () =>{
        message.info('已经提交');
    }
  render() {
    return (
      <div className="pp">
        <Button type="primary" onClick={this.click}>Button</Button>
      </div>
    );
  }
}
