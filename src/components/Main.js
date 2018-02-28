import '../style/index.scss';
import React from 'react';
import logo from '../assets/logo.svg'
class AppComponent extends React.Component {
  render () {
    return (
      <div className="index">
        <img src={logo} alt=""/>
        <div className="notice">react</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
