import React from "react";
//@ts-ignore
import { connect } from "react-redux";
import Map from "./Map";

class MapBox extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default MapBox;
