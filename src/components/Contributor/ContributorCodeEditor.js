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
import $ from 'jquery'

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

  showLogo = () => {
    const language = this.props.state.language.languages[this.props.state.contributor.contributorLanguage]
    const idv = Object.keys(language)[0]
    return (
        <Logo key={idv} id={idv} name={language[idv]} />
      )
  }
  setCategoryIdFunction = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'SAVE_CATEGORY_ID',
      payload: {contributorCategoryId: event.target.value}
      });
  }
  setSkillIdFunction = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'SAVE_SKILL_ID',
      payload: {contributorSkillId: event.target.value}
      });
  }
  setTitle = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'SAVE_PROBLEM_TITLE',
      payload: {problemTitle: event.target.value}
      });
  }
  setNotes = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'SAVE_NOTES',
      payload: {notes: event.target.value}
    }, ()=> console.log(event.target.value));
  }
  setPrompt = (event) => {
    event.preventDefault()
    debugger
    this.props.dispatch({
      type:'SAVE_PROMPT',
      payload: {prompt: event.target.value}
      });
  }
  setDescription = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'SAVE_DESCRIPTION',
      payload: {description: event.target.value}
    }, ()=> console.log(event.target.value));
  }

  // <div className="ui input" onChange={event => this.setDescription(event)}>
  //   <input type="text" placeholder="Description..." />
  // </div>
  // setDescription = (event) => {
  //   event.preventDefault()
  //   this.props.dispatch({
  //     type:'SAVE_PROBLEM_DESCRIPTION',
  //     payload: {problemDescription: event.target.value}
  //     });
  // }

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
        <h3 id='inst-header3'>1. Paste Your Code In The Editor On The Left</h3>
        <h3 id='inst-header3'>2. Then Fill in The Settings On The Right</h3>
        <h2 id='inst-header2'>3. Submit Your Code!</h2>
      </div>
      <div id='dropdownParentDiv'>
          <div id='dropdownChildDiv'>
          <div>
              <div className="ui input" onChange={event => this.setTitle(event)}>
                <input type="text" id='titleField' placeholder="Title..." />
              </div>
              <div className="ui input" onChange={event => this.setPrompt(event)}>
                <input type="text" id='promptField' placeholder="Prompt. What is the problem?" />
              </div>
              <div className="ui input" onChange={event => this.setNotes(event)}>
                <input type="text" id='notesField' placeholder="Put any important notes." />
              </div>
              <div className="ui input" onChange={event => this.setDescription(event)}>
                <input type="text" id='descriptionField' placeholder="Description. Describe the story behind the problem." />
              </div>
            </div>

            <div id='difficultyDropdownDiv'>
              <select onChange={(event) => this.setSkillIdFunction(event)} name="difficulty" className="ui selection dropdown" multiple="" id="multi-select">
                <option value="" id='0'>Difficulty</option>
                <option value="1" id='1'>Easy</option>
                <option value="2" id='2'>Medium</option>
                <option value="3" id='3'>Hard</option>
                <option value="4" id='4'>Advanced</option>
                <option value="5" id='5'>Impossible</option>
              </select>
            </div>
            <div id='categoryDropdownDiv'>
              <select onChange={(event) => this.setCategoryIdFunction(event)} name="category" className="ui selection dropdown">
                <option value="" id='0'>Category</option>
                <option value="2" id='1'>Guessing Output</option>
                <option value="3" id='2'>Debugging</option>
                <option value="4" id='3'>Execution Contexts</option>
                <option value="5" id='4'>Breakpoints</option>
                <option value="6" id='5'>Efficiency Improvements</option>
                <option value="7" id='6'>Server Side</option>
                <option value="1" id='7'>Context Based Problem Solving</option>
              </select>
            </div>
        </div>
        <div className='submitYourCode'>
          <div id='logoAndSubmit'>
            <div id='buttonDiv'>
              <button className="ui inverted red button, big ui button" id='ten' onClick={(event)=>this.submitState(event)}>Submit</button>
            </div>
          </div>
        </div>
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
