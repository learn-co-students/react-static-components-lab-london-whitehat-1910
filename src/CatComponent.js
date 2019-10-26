import React, { Component } from 'react';
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
import MouseComponent from './MouseComponent'

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}