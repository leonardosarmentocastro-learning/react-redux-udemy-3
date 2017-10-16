import React, { Component } from 'react';

class GoogleMap extends Component {
  /**
   * Lifecycle after a component successfully finished rendering.
   */
  componentDidMount() {
    /** Set specs for rendering a GoogleMaps' map. */
    const refs        = this.refs;
    const HTMLNode    = refs.map;

    const props       = this.props;
    const {lat, lon}  = props;
    const options     = {
      zoom: 12,
      center: {
        lat,
        lng: lon
      }
    };

    /** Render the GoogleMaps. */
    new google.maps.Map(HTMLNode, options);
  }

  render() {
    /**
     * The "ref" property is a React property that let us
     * reference this HTMLNode from the component's "props", like:
     * `this.props.map // <div ref="map"></div>`
     */
    const template = (
      <div ref="map"></div>
    );

    return template;
  }
}

export default GoogleMap;
