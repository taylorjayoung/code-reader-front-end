import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import 'brace/theme/twilight';
import { connect } from 'react-redux';

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
      <div className="confirm-editor-parent">
        <div className='confirm-editor-child'>
          <div id='confirming-editor' style={{height: '500px', width: '500px'}}>
              <AceEditor
              mode="javascript"
              theme="twilight"
              name="blah2"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              editorProps={{
                  $blockScrolling: true
              }}
              value={this.state.code}

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
        <h3>2. Then Confirm The Code Matches On The Right</h3>
        <h3>3. Edit The Code On The Right If It Doesn't Match</h3>
        <h2>4. Submit Your Code!</h2>
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
