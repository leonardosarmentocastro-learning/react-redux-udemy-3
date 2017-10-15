/**
 * NPM packages.
 */
import React, { Component } from 'react';

/**
 * Project packages.
 */
import SearchBar from './../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
