/**
 * NPM packages.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Project packages.
 */
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    /** Component's state. */
    this.state = { term: '' };

    /** Binding context for public functions. */
    this.onInputChange  = this.onInputChange.bind(this);
    this.onFormSubmit   = this.onFormSubmit.bind(this);
  }

  render() {
    const template = (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Get a give-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secundary">Submit</button>
        </span>
      </form>
    );

    return template;
  }

  onFormSubmit(event) {
    event.preventDefault();

    /** Fetch weather data. */
    const fetchWeather  = this.props.fetchWeather;
    const city          = this.state.term;
    fetchWeather(city);

    /** Clean the search bar's search term. */
    const state = {term: ''};
    this.setState(state);
  }

  onInputChange(event) {
    const input = event.target;
    const value = input.value;

    const state = {term: null};
    state.term  = value;
    this.setState(state);
  }
}

function mapDispatchToProps(dispatch) {
  const actionCreators        = {fetchWeather: null};
  actionCreators.fetchWeather = fetchWeather;

  return bindActionCreators(actionCreators, dispatch);
}

const Container = connect(null, mapDispatchToProps)(SearchBar);
export default Container;
