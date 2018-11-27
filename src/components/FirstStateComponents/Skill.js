import React, { Component } from 'react';
import '../../App.css';
import Select from 'react-select';
import { connect } from 'react-redux';
import Categories from './Categories'


const skillLevels = [
  { label: "Beginner", value: 1 },
  { label: "Intermediate", value: 2 },
  { label: "Hard", value: 3 },
  { label: "Advanced", value: 4 },
  { label: "Impossible", value: 5 },
];

class Skill extends Component {
  skillSetter = (level) => {
      const data = {
        categorySelection: true,
        selectedSkillLevel: level['value']
      }
      this.props.dispatch({
        type:'SAVE_SKILL_SELECTION',
        payload: data});
    }

  render() {
    return (
      <div className='skillParentDiv'>
        <div className="skillChildDiv">
          <Select onChange={opt => this.skillSetter(opt)} options={skillLevels} />
        </div>
        {this.props.state.skill.categorySelection ? <Categories /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Skill);
