import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import 'brace/theme/twilight';
import { connect } from 'react-redux';
import CategoryCard from '../DropDownComponents/CategoryDropdown';
import SkillCard from '../DropDownComponents/SkillCard'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Logo from '../FirstStateComponents/Logo'

class ContributorCodeEditor extends Component {
  state = {
    code: ''
  }

  getCode = (newValue) => {
    this.setState({code:newValue})
  }

  submitState = (event)=> {
    event.preventDefault()
    const data = {
      readInstructions: false,
      contributorCode: this.state.code,
      submitProblem: false,
      displayQuizForm: true
    }
    this.props.dispatch({
      type:'SAVE_CONTRIBUTOR_CODE',
      payload: data});
  }

  // mapCategories = () => {
  //   return this.props.state.category.categories.map(category =>  {
  //      return <MenuItem text={category[Object.keys(category)]} />
  //   }
  // }

  mapCategories = () => {
    return this.props.state.category.categories.map(category => {
      const uuidv1 = require('uuid/v1');

    })
  }

  mapCategories = () => {
    return this.props.state.category.categories.map(category => {
      return category[Object.keys(category)]
    })
  }

  showLogo = () => {
    const language = this.props.state.language.languages[this.props.state.contributor.contributorLanguage]
    const idv = Object.keys(language)[0]
    return (
        <Logo key={idv} id={idv} name={language[idv]} />
      )
  }
clickHandler = () => {
  debugger
}

  render() {
    return (
      <>
      <div className="contributorEditorParent">
        <div className='contributorEditorChild'>
          <div id='ace-editor' style={{height: '500px', width: '500px'}}>
              <AceEditor
              mode="javascript"
              theme="twilight"
              name="blah2"
              onLoad={this.onLoad}
              onChange={this.getCode}
              value={this.state.code}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              editorProps={{
                  $blockScrolling: true
              }}

            setOptions={{
              resize: true,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              }}
              />
          </div>
        </div>
      </div>
      <div id='compare-instructions'>
        <h3>1. Paste Your Code In The Editor On The Left</h3>
        <h3>2. Then Fill in The Settings On The Right</h3>
        <h2>3. Submit Your Code!</h2>
      </div>
      <div className="problem-settings-container">
        <div className='problem-settings-container-child'>
          <SkillCard />
          <CategoryCard />
        </div>
      </div>
      <div id='selectedLogoDisplay'>
        {this.showLogo()}
      </div>
      <div className='submitYourCode'>
        <button className="ui primary button, big ui button" id={1} onClick={(event)=>this.submitState(event)}>Submit</button>
      </div>
      < />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ContributorCodeEditor);
