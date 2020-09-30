import React, { useState } from "react";
// @ts-ignore
import { connect } from "react-redux";
import { AutoComplete } from "antd";
import { selectId } from "../actions";

const SearchUser = (props: any) => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const findOptions = (input: string): void => {
    setOptions(
      props.people
        ? props.people
            .filter((person: any) => person.name.includes(input))
            .map((person: any) => ({ value: person.name }))
        : ["loading..."]
    );
  };
  const onSelect = (data: string): void => {
    props.selectId(
      props.people.find((person: any) => person.name === data).workplace
    );
  };

  return (
    <AutoComplete
      style={{ width: "200px", margin: "15px 150px 15px 15px", float: "right" }}
      options={options}
      onSearch={findOptions}
      onSelect={onSelect}
    />
  );
};
const mapStateToProps = ({ people }: any) => ({ people });

export default connect(mapStateToProps, { selectId })(SearchUser);
