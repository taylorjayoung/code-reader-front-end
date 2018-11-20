import React, { Component } from 'react';


class LanguageViewer extends Component {


  displayFinder = (props) => {
    if(props.display === 'HOME'){
      return (<><h1 className='titles'>Learn to Read Code </h1>
      <h1 className='titles'>Choose a Language </h1>< />)
    }

    else if(props.display === 'SKILL'){
      return (<>
      <h1 className='titles'>Choose a Skill Level </h1>< />)
    }


  }

  render() {
    return (
      <div className='titleDiv'>
        {this.displayFinder(this.props)}
      </div>
    );
  }
}

export default LanguageViewer;
