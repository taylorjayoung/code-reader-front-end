import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/ruby';
import brace from 'brace';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/twilight';


class Javascript extends Component {
  render() {
    return (
      <div className="problemFieldParent">
        <div className='problemFieldChild'>
          <div>
              <AceEditor
              mode="ruby"
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
              value={'SAMPLE CODE PROBLEM'}

            setOptions={{
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

export default Javascript;
