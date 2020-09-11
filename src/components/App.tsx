import React from 'react';
//@ts-ignore
import { connect } from 'react-redux';
import action from '../actions';
import { Popover, Row, Col } from 'antd';

const myMap = (svg: any, func: Function) :any => {
  const { props } = svg;
  const { children } = props;
  
  if (children) {
    const newChildren = Array.isArray(children) ? children.map(child => myMap(child, func)) : myMap(children, func);
    const newProps = { ...props, children: newChildren }
    return { ...svg, props: newProps }
  }

  return func(svg)
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


const regExpCheck = /^\D-\d$/

const addPopover = (elem: any) => {
  const { id } = elem.props
  // @ts-ignore
  return regExpCheck.test(id) ? <Popover placement="bottomRight" title={store[id] || "empty"} content={content} trigger="hover">{elem}</Popover> : elem
}

//@ts-ignore
function App(props) {

  action();

  console.log(props)

  return (
    <div>
      <h1>Hello World</h1>
      {/* <div>{myMap(map, addPopover)}</div> */}
    </div>
  );
}
//@ts-ignore
const mapStateToProps = (state) => {
  const { offices } = state;
  return { offices }
}
export default connect()(App);