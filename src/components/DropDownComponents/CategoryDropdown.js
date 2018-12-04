import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryCard extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      category: null
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


    categoryMapper = () => {
      return this.props.state.category.categories.map(category => {
        const uuidv1 = require('uuid/v1');
        const cat = category[Object.keys(category)]
      return  <button key={uuidv1()} onClick={() => this.setState({category: cat})}> {cat} </button>
      })
    }

  render() {
    return (
      <>
      <div>
        <button onClick={this.showMenu}>
          Category
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
              {this.categoryMapper()}
              </div>
            )
            : (
              null
            )
        }
      </div>
      <div>Selection: {this.state.category}</div>
      < />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(CategoryCard);
