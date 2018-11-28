import React, { Fragment, Component } from 'react';
import Resource from './Resource'


export default ({category}) => {
  return (
    <>
      <h6>{category.label}</h6>
      <ul>
        <li>Resource 1</li>
        <li>Resource 2</li>
        <li>Resource 3</li>
      </ul>
    < />
  )
}
