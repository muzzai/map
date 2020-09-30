import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import { myMap, convertJSONtoJSX, getValidStyles } from "../../utils";
import PopCard from "../PopCard";
import img from './unnamed.jpg'
const faker = require("faker");
const regExpCheck = /^\D\d$/;


const Map = ({ offices, people }: any) => {
  if (!offices || !people) {
    return <h1>Loading...</h1>;
  }
  const findPerson = (id: string) =>
    people.find((person: any) => person.workplace === id);
  const addPopover = (elem: any) => {
    const { id } = elem.props;
    const emptyPerson = { name: "empty", workplace: id, photo: img }
    if (regExpCheck.test(id)) {
      const person = findPerson(id)
      return (
        <PopCard key={id} id={id} person={person ? { ...person, photo: faker.image.avatar(), phrase: faker.hacker.phrase() } : emptyPerson}>
          {elem}
        </PopCard>
      );
    }
    return elem;
  };
  const { children } = offices;
  const { style, viewBox } = offices.attributes;

  const newStyle = getValidStyles(style);
  const map = (
    <svg style={{ ...newStyle }} viewBox={viewBox}>
      {children.map((child: any) => convertJSONtoJSX(child))}
    </svg>
  );
  return (
    <div
      style={{
        display: "block",
        width: "70%",
        overflow: "auto",
        margin: "10px auto",
        position: "relative",
      }}
    >
      {myMap(map, addPopover)}
    </div>
  );
};

const mapStateToProps = ({ offices, people }: any) => ({ offices, people });

export default connect(mapStateToProps, {})(Map);
