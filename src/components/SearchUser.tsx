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
        : []
    );
  };
  const onSelect = (data: string): void => {
    props.selectId(
      props.people.find((person: any) => person.name === data).workplace
    );
  };

  return (
    <div>
      <AutoComplete
        style={{ width: "200px" }}
        options={options}
        onSearch={findOptions}
        onSelect={onSelect}
      />
    </div>
  );
};
const mapStateToProps = ({ people }: any) => ({ people });

export default connect(mapStateToProps, { selectId })(SearchUser);
