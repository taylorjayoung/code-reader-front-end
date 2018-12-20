import React, { Component } from 'react';
import '../../App.css';



class WelcomeLearner extends Component {
  render() {
    return (
      <div className="learnerText" id="learnerTextParent">
      <article>
        <h1 id='learner-header'>Welcome Reader</h1>
        <p className='learner-p'>BitBook is the first resource for coders that emphasizes context over construction. Sites like CodeWars and HackerRank are phenomenal for practicing raw linguistic fundamentals and problem solving ability. As you probably know, while these types of problems can give you insight into the technical skills of a programmer, they are not holistic assessments of ability. Coders need to be able to solve problems not in a vacuum, but based on other people's code. In the real world the problems you face are heavily context-based. That's where BitBook comes in.</p>
        <p className='learner-p'>As a Learner you will get the chance to specify your language, difficulty and categories of interest. Then you'll be presented with a set of user-submitted problems to choose from. Each problem will have code that you need to read and understand, before taking a quiz on it.</p>
        <p className='learner-p'> Good Luck and Enjoy.</p>
      </article>
      </div>
    );
  }
}

export default WelcomeLearner;
