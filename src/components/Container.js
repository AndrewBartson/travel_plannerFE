import React from "react";
import '../css/main.css';
import TripForm from "./TripForm";
import MyMapComponent from "./MyMapComponent";

class Container extends React.PureComponent {
  state = {
    isMarkerShown: true
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <div  className="container1">
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        <TripForm />
      </div>
    );
  }
}

export default Container