import React, { Component } from 'react';

class SkillCard extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      difficulty: null
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }
  saveDifficultyId = (id) => {
    this.props.dispatch({
            type:'SAVE_PREFERENCE',
            payload: {difficulty_id: id}}
          )
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.showMenu}>
          Difficulty
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={() => this.setState({difficulty: 'Easy'})}> Easy </button>
                <button onClick={() => this.setState({difficulty: 'Medium'})}> Medium </button>
                <button onClick={() => this.setState({difficulty: 'Hard'})}> Hard </button>
                <button onClick={() => this.setState({difficulty: 'Advanced'})}> Advanced </button>
                <button onClick={() => this.setState({difficulty: 'Impossible'})}> Impossible </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
      <div>Selection: {this.state.difficulty}</div>
      < />
    );
  }
}

export default SkillCard
