import React, { Component } from 'react';
import '../../App.css';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';
import CategorySelector from './CategorySelector'
import SubmitButton from './SubmitButton'
import { connect } from 'react-redux';


class Categories extends Component {

  categorySetter = (category) => {
    const button = category.length === 0 ? false : true
    const data = {
      selectedCategories: category,
      submitButton: button
    }
    this.props.dispatch({
      type:'SAVE_CATEGORY_SELECTION',
      payload: data});
  }

  render() {
    return (
      <div className='categoryParentDiv'>
        <div className='categoryChildDiv'>
          <CategorySelector selector={this.categorySetter}/>
          {this.props.state.category.submitButton ? <SubmitButton /> : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Categories);
