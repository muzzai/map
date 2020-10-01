import React, { useState } from "react";
// @ts-ignore
import { connect } from "react-redux";
import { AutoComplete } from "antd";
import { selectId } from "../../actions";

const SearchUser = ({ people, selectId }: any) => {
  const [options, setOptions] = useState<{ value: string; person: any }[]>([]);
  const onSearch = (input: string): void => {
    const re = new RegExp(`^${input}`, "i");
    const top = people.filter((person: any) => {
      const [_, lastName] = person.name.split(" ");
      return re.test(lastName);
    });
    const middle = people.filter((person: any) => {
      const [firstName] = person.name.split(" ");
      return re.test(firstName) && !top.includes(person);
    });
    const bottom = people.filter(
      (person: any) =>
        person.name.includes(input) &&
        !top.includes(person) &&
        !middle.includes(person)
    );
    setOptions(
      top
        .concat(middle)
        .concat(bottom)
        .map((person: any) => ({ value: person.name, person }))
    );
  };
  const onSelect = (_: string, option: any): void => {
    selectId(option.person.workplace);
  };

  return (
    <AutoComplete
      style={{ width: "200px", margin: "15px 150px 15px 15px", float: "right" }}
      options={options}
      placeholder={"Search here"}
      onSearch={onSearch}
      onSelect={onSelect}
    />
  );
};
const mapStateToProps = ({ people }: any) => ({ people });

export default connect(mapStateToProps, { selectId })(SearchUser);
