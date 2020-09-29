import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { Card, Avatar } from 'antd';
const faker = require('faker');

const { Meta } = Card


const UserCard = ({ people, id, unselectId }:any) => {

  const findPerson = () => {
    const person = people.find((person: any) => person.workplace === id);
    return <p>{person ? person.name : 'empty' }</p>;
  }
  
  return <Meta avatar={<Avatar src={faker.image.avatar()}/>} title={findPerson()} />
  
}

const mapStateToProps = (state: any) => {
  const { people } = state;
  return { people }
}

export default connect(mapStateToProps, {})(UserCard)