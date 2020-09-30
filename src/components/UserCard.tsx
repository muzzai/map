import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

const UserCard = ({ person }: any) => {
  return (
    <Card style={{width: "300px"}}>
    <Meta avatar={<Avatar src={person.photo} />} title={person.name} description={person.phrase}/>
    </Card>
  )
};

export default UserCard;
