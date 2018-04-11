import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      "AIzaSyAd0ZZdBnJftinI-qHnPoP9kq5Mtkey6Ac" +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: 47.6205063, lng: -122.3514714 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 47.6205063, lng: -122.3514714 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export default MyMapComponent;
