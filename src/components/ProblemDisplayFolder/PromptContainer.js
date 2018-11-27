import React, { Component } from 'react';
import '../../App.css';



class PromptContainer extends Component {
  render() {
    return (
      <div className="promt">
        <div className='promptText'>
        <article>
          <h2>Title</h2>
          <h3>Prompt</h3>
          <p>What output should be expected from the final function?</p>
          <h3>Background:</h3>
          <p>In this code some data is being pulled form an API. What's happening with that data? Where is it being stored and where is it being referenced? These are questions you'll have to answer before making your final determination.</p>
        </article>
        <br></br>
        <p>Below are some resources that will get you on track should you get stuck. </p>
        <br></br>
        <h3>Resources</h3>

        <ul>
          <li>Resource 1</li>
          <li>Resource 2</li>
          <li>Resource 3</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default PromptContainer;
