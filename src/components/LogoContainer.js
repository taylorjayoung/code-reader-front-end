import React, { Component } from 'react';
import LogoSeeds from './LogoSeeds'
import Logo from './Logo'


class LogoContainer extends Component {

  logoMapper = (logoPathsObj, props) => {
    return Object.keys(logoPathsObj).map(function(key, index) {
      return <Logo key={key} id={key} name={key} clicker={this.props.clicker}/>
    }.bind(this))
  }

  logoPathsArray = {LogoSeeds}

  render() {
    return (
      <div className="container" >
        {this.logoMapper(LogoSeeds)}
      </div>
    );
  }
}

export default LogoContainer;
