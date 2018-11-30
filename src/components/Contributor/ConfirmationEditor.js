import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Quiz from '../../lib/Quiz';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import 'brace/theme/twilight';


class ConfirmationEditor extends Component {

  render(){
  return(<>
    <div className="contributorEditorParent">
      <div className='contributorEditorChild'>
        <div id='ace-editor' style={{height: '500px', width: '500px'}}>
            <AceEditor
            mode="javascript"
            theme="twilight"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            value={this.props.code}
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
    < />
  )}
}

export default ConfirmationEditor
