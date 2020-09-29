import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import { myMap, convertJSONtoJSX, getValidStyles } from "../../utils";
import PopCard from "../PopCard";

const regExpCheck = /^\D\d$/;

const windowWidth = document.body.clientWidth;
const windowHeight = document.body.clientHeight;

const Map = ({ offices }: any) => {
  const addPopover = (elem: any) => {
    const { id } = elem.props;
    return regExpCheck.test(id) ? <PopCard id={id}>{elem}</PopCard> : elem;
  };

  if (!offices) {
    return <h1>Loading...</h1>;
  }
  const { children } = offices;
  const { style, viewBox, x, y } = offices.attributes;

  const newStyle = getValidStyles(style);
  const map = (
    <svg style={{ ...newStyle }} viewBox={viewBox} x={x} y={y}>
      {children.map((child: any) => convertJSONtoJSX(child))}
    </svg>
  );
  return (
    <div
      className={"scrollable-container"}
      style={{
        display: "block",
        width: "1000px",
        overflow: "auto",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {myMap(map, addPopover)}
    </div>
  );
};

const mapStateToProps = ({ offices, visible }: any) => ({ offices, visible });

export default connect(mapStateToProps, {})(Map);
