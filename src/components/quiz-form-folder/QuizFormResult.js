import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { connect } from 'react-redux';

class QuizFormResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false,
    };
  }

  storeState = (json) => {
      const data = {
        contributorQuizJSON: json,
        quizSubmitted: true,
        displayQuizForm: false
      }
      this.props.dispatch({
        type:'QUIZ_SUBMITTED',
        payload: data});
  }



  render() {
    const { result } = this.props;
    const style = {
      resultBox: {
        background: '#e1f5fe',
        minHeight: 260,
        padding: 20,
        margin: 20
      },
      button: {
        whiteSpace: 'nowrap',
        display: 'inline-block',
        borderRadius: '5px',
        padding: '10px 15px',
        margin: '0 0 20px 20px',
        fontSize: '20px',
        color: '#fff',
        backgroundImage: 'linear-gradient(#4f93ce,#285f8f)',
        border: '1px solid #285f8f',
        cursor: 'pointer'
      }
    }

    return (
      <div className="QuizFormResult">
       	  {result != null? (
              <div>
                <div style={style.resultBox}>
                 <pre> {result} </pre>
              </div>
              <div>
                <CopyToClipboard text={result}
                  onCopy={() => this.setState({copied: true}, () => this.storeState(result))}>
                  <button style={style.button}>Submit</button>
                </CopyToClipboard>
              </div>

              </div>


          ) : (
            null
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(QuizFormResult);
