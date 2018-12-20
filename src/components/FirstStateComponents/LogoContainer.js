import React, { Component } from 'react';
import LogoSeeds from './LogoSeeds'
import Logo from './Logo'
import { connect } from 'react-redux';
import { Button, Segment } from 'semantic-ui-react'
import Skill from './Skill'


class LogoContainer extends Component {
  logoMapper = (logoPathsObj) => {

    if(this.props.state.language.selectedLanguage){
      const language = this.props.state.language.languages[this.props.state.language.selectedLanguage]
      const idv = Object.keys(language)[0]
      return (
        <div id='selectedLanguageContainer'>
        <Logo key={idv} id={idv} name={language[idv]} />
        {this.props.state.language.skillSelection ? <Skill />: null}
        </div>
      )
    }

    else return Object.keys(logoPathsObj).map(function(key, index) {

      return <Logo key={key} id={logoPathsObj[key]} name={key} />
    }.bind(this))
  }

  render() {
    return (
      <div className="first-state-logo-container" >
        {this.logoMapper(LogoSeeds)}
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(LogoContainer);
