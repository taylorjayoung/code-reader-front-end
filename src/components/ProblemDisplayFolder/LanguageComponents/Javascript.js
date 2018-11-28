import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import ProblemText from '../Problems/Javascript/CodeEditorValues/ProblemOne'
// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/twilight';
import { connect } from 'react-redux';


class Javascript extends Component {
  // selectEditorInformationToDisplay = () => {
  //   this.props.state.skill.selectedSkillLevel
  // }

  render() {
    return (
      <div className="problemFieldParent">
        <div className='problemFieldChild'>
          <div>
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
              value={ProblemText()}

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
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Javascript);
