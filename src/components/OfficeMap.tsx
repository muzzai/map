import React from 'react';
//@ts-ignore
import action from '../actions';
// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { getJSXElementFromSvg, myMap } from '../utils';
import { Popover } from 'antd';
import UserCard from './UserCard'

const regExpCheck = /^\D-\d$/

class OfficeMap extends React.Component <any, any> {

  componentDidMount() {
    this.props.action()
  }
  
  addPopover (elem: any) {
    const { id } = elem.props
    // @ts-ignore
    return regExpCheck.test(id) ? <Popover placement="bottomRight" title={id} content={<UserCard id={id}/>} trigger="hover">{elem}</Popover> : elem
  }
  
  render() {
    if (!this.props.offices) {
      return <div>Loading</div>
    }
    console.log(this.props.offices)
    const map = getJSXElementFromSvg(this.props.offices);
    const interactiveMap = myMap(map, this.addPopover)
    return (
      <div>
        {interactiveMap}
      </div>
    )
  }
}

const mapStateToProps = (state:any) => {
  const { offices } = state;
  return { offices: offices }
}
export default connect(mapStateToProps, { action })(OfficeMap);