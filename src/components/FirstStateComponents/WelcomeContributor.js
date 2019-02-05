import React, { Component } from 'react';
import '../../App.css';



class WelcomeContributor extends Component {

  render() {
    return (
      <div className="welcomeTextParent" id="contributorTextParent">
        <div id="contributorTextChild">
        
        <article>
          <h1 id='contributorHeader'>Welcome Author</h1>
          <p>BitBook is the first resource for coders that emphasizes context over construction. Sites like Code-Wars and HackerRank are phenomenal for practicing raw linguistic fundamentals and problem solving ability. As you probably know, while these types of problems can give you insight into the technical skills of a programmer, they are not holistic assessments of ability. Coders need to be able to solve problems that aren't in a vacuum. In the real world the problems you face are heavily context-based. That's where BitBook comes in.</p>
          <p>Whether you want help on a problem or you just want to give back to the community, as an Author you'll be uploading problems based on real repositories. You'll be able to customize how much of the code is seen, as well as select the languages you use, the skill level and category. Readers will see your problems and submit their responses. And ultimately you will be able to judge the correctness as well as the quality of the response.</p>
          <p> Welcome and Enjoy.</p>
        </article>
        </div>
      </div>
    );
  }
}

export default WelcomeContributor;
