import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const faker = require("faker");

const { Meta } = Card;

const UserCard = ({ person }: any) => {
  return <Meta avatar={<Avatar src={person.photo} />} title={person.name} />;
};

export default UserCard;
