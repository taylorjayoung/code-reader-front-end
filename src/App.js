import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogoContainer from './components/LogoContainer'
import NavBar from './components/NavBar'
import LanguageViewer from './components/LanguageViewer'
import Home from './components/Home'
import Skill from './components/Home'


class App extends Component {
  state = {
    home: true,
    logo: false,
    skill: false,
    selectedLanguage: ''
  }

  componentDidMount(){
    this.setState({display: 'HOME', selectedLanguage: ''})
  }

  clickHandler = (event) => {
    const lang = event.target.id ? event.target.id : event.target.innerText
    this.setState({
      skill: true,
      selectedLanguage: lang
    },() => console.log(this.state))
  }

  homeDisplay = () => {
    if(this.state.home === true){
      return <Home />
    }
  }

  logoDisplay = () => {
    if(this.state.logo === true){
      return <LogoContainer />
    }
  }

  skillDisplay = () => {
    if(this.state.skill === true){
      return <Skill />
    }
  }

  render() {
    return (
      <>
      <div className="App">
        <NavBar />
        {this.homeDisplay()}
        {this.logoDisplay()}
        {this.skillDisplay()}
      </div>
      <div className='mover' >
        <LanguageViewer
          home={this.state.home}
          logo={this.state.logo}
          skill={this.state.skill}
          />
      </div>
      < />
    );
  }
}

export default App;
