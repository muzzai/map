import React from 'react';
//@ts-ignore
import action from '../actions';
// @ts-ignore
import Office from './office01.svg';
// @ts-ignore
import { connect } from 'react-redux';
import { Popover, Row, Col } from 'antd';
// @ts-ignore
import { parse } from 'svg-parser';

const convertHASTtoJSX = (hast: any) :any => {
  const { children, tagName, properties } = hast;
  switch (tagName) {
    case 'svg': {
      const { height, preserveAspectRatio, viewBox, width, xmlns } = properties;
      return (<svg preserveAspectRatio={preserveAspectRatio} height={height} width={width} viewBox={viewBox} xmlns={xmlns}>
        {children.map((child : any) => convertHASTtoJSX(child))}
        </svg>)
        }
    case 'rect': {
      const { style, id, height, width, x, y } = properties;
      const newStyle = style.split(";").reduce((acc :any, x:any) => {
        const [name, val] = x.split(":");
        const [first, ...rest] = name.split('-');
        const camelCaseName = rest.length 
          ? `${first}${rest.map((word:string) => word[0].toUpperCase() + word.slice(1)).join('')}`
          : first
        return {...acc, [camelCaseName]: val}
      }, {})
      return (<rect style={newStyle} id={id} key={id} height={height} width={width} x={x} y={y}>
        {children.map((child : any) => convertHASTtoJSX(child))}
        </rect>)
      }
    case 'root': return convertHASTtoJSX(children[0]);
        
    default: return children.map((child : any) => convertHASTtoJSX(child))
  }
}


const myMap = (svg: any, func: Function) :any => {
  const { props } = svg;
  const { children } = props;
  
  if (children.length) {
    const newChildren = children.map((child:any) => myMap(child, func))
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


const regExpCheck = /^\D\d$/

const addPopover = (elem: any) => {
  const { id } = elem.props
  // @ts-ignore
  return regExpCheck.test(id) ? <Popover placement="bottomRight" title={id} content={content} trigger="hover">{elem}</Popover> : elem
}

class App extends React.Component <any, any> {
  componentDidMount() {
    this.props.action()
  }
  


  render() {
    if (!this.props.offices) {
      return <div>Loading</div>
    }
    console.log(myMap(convertHASTtoJSX(parse(this.props.offices).children[0]), addPopover))
    return (
      <div>
        <h1>HEllo World!</h1>
        {myMap(convertHASTtoJSX(parse(this.props.offices).children[0]), addPopover)}
      </div>
    )
  }
}
const mapStateToProps = (state:any) => {
  const { offices } = state;
  return { offices: offices }
}
export default connect(mapStateToProps, { action })(App);