import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import { myMap, convertJSONtoJSX } from "../../utils";
import PopCard from "../popcard/PopCard";
import "./Map.css";
import img from "./unnamed.jpg";
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
    const emptyPerson = { name: "empty", workplace: id, photo: img };
    if (regExpCheck.test(id)) {
      const person = findPerson(id);
      return (
        <PopCard
          key={id}
          id={id}
          person={
            person
              ? {
                  ...person,
                  photo: faker.image.avatar(),
                  phrase: faker.hacker.phrase(),
                }
              : emptyPerson
          }
        >
          {elem}
        </PopCard>
      );
    }
    return elem;
  };
  return (
    <div className="map">{myMap(convertJSONtoJSX(offices), addPopover)}</div>
  );
};

const mapStateToProps = ({ offices, people }: any) => ({ offices, people });

export default connect(mapStateToProps, {})(Map);
