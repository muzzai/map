import React from "react";
import Map from "./map/Map";
// @ts-ignore
import { connect } from "react-redux";
import { getOffice, getPeople } from "../actions";
import Header from "./header/Header";

const App = (props: any) => {
  props.getOffice(1);
  props.getPeople();
  return (
    <div>
      <Header />
      <Map style={{ margin: "10px" }} />
    </div>
  );
};

export default connect(null, { getOffice, getPeople })(App);
