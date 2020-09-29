import React, { useState } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { Popover } from 'antd';
import UserCard from './UserCard'
import { unselectId } from '../actions'

const PopCard = ({id, visiblePerson, children, unselectId }: any) => {

  const handleSelect = (visible: boolean) => {
    if (!visible) {
      unselectId()
    }
  }

  return (
    <Popover
    id={id} 
    placement={"top"} 
    title={id} 
    visible={id === visiblePerson} 
    content={<UserCard id={id}/>}
    trigger="click"
    onVisibleChange={handleSelect}>
      <Popover 
        id={id} 
        placement={"top"} 
        title={id} 
        content={<UserCard id={id}/>}
        trigger="hover"
      >{children}</Popover>
    </Popover>
  )
}

const mapStateToProps = ({visiblePerson}: any) => ({visiblePerson});

export default connect(mapStateToProps, { unselectId })(PopCard);



