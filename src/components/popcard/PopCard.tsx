import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import { Popover } from "antd";
import UserCard from "./UserCard";
import { unselectId } from "../../actions";

const PopCard = ({ person, visiblePerson, children, unselectId }: any) => {
  const handleSelect = (visible: boolean) => {
    if (!visible) {
      unselectId();
    }
  };

  const title = (
    <div>
      <span>Workplace</span>
      <span style={{ float: "right" }}>{person.workplace}</span>
    </div>
  );

  return (
    <Popover
      placement="top"
      title={title}
      visible={person.workplace === visiblePerson}
      content={<UserCard person={person} />}
      trigger="click"
      onVisibleChange={handleSelect}
    >
      <Popover
        placement="top"
        title={title}
        content={<UserCard person={person} />}
        trigger="hover"
      >
        {children}
      </Popover>
    </Popover>
  );
};

const mapStateToProps = ({ visiblePerson }: any) => ({ visiblePerson });

export default connect(mapStateToProps, { unselectId })(PopCard);
