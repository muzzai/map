import React from 'react'
// @ts-ignore
import { parse } from 'svg-parser';
import { Popover } from 'antd';

const getValidJSXStyles = (style:string) => {
  const [ dashedKey, value ] = style.split(":");
  const [ firstWord, ...restWords ] = dashedKey.split("-");
  const camelCaseKey = restWords.length
    ? firstWord + restWords.map((word:string) => word.replace((/(\b[a-z])/g), (x) => x.toUpperCase()))
    : firstWord
  return [ camelCaseKey, value ]
}

const convertHASTtoJSX = (hast: any) :any => {
  const { children, tagName, properties } = hast;
  const { style } = properties;
  const newStyle = style
    ? style.split(";").reduce((acc :any, style:any) => {
          const [ key, val ] = getValidJSXStyles(style);
        return {...acc, [key]: val};
      }, {})
    : ""
  if (children.length) {
    return React.createElement(tagName, { ...properties, style:{...newStyle}}, ...children.map((child: any) => convertHASTtoJSX(child)));
  }

  return React.createElement(tagName, { ...properties, style:{...newStyle}}, children);
}

export const myMap = (svg: any, func: Function) :any => {
  const { props } = svg;
  const { children } = props;
  
  if (children.length) {
    const newChildren = children.map((child:any) => myMap(child, func))
    const newProps = { ...props, children: newChildren }
    return { ...svg, props: newProps }
  }

  return func(svg)
}

export const getJSXElementFromSvg = (svgString:string) => convertHASTtoJSX(parse(svgString).children[0])

