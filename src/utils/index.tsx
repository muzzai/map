import React from 'react'

export const getValidJKeyValPair = (style:string) => {
  
  const [ dashedKey, value ] = style.split(":");
  const [ firstWord, ...restWords ] = dashedKey.split("-");
  const camelCaseKey = restWords.length
    ? firstWord + restWords.map((word:string) => word.replace((/(\b[a-z])/g), (x) => x.toUpperCase()))
    : firstWord
  return [ camelCaseKey, value ]
}

export const getValidStyles = (style: string) => {
  return style.split(";")
    .filter((style:any) => style !== "")
    .reduce((acc :any, style:any) => {
      const [ key, val ] = getValidJKeyValPair(style);
      return {...acc, [key]: val};
    }, {})
}
export const convertJSONtoJSX = ({ children, name, attributes }: any) :any => {
  const { style } = attributes;
  const newStyle = style
    ? getValidStyles(style)
    : ""
  if (children.length) {
    return React.createElement(name || 'g', { ...attributes, style:{...newStyle}}, ...children.map((child: any) => convertJSONtoJSX(child)));
  }

  return React.createElement(name || 'g', { ...attributes, style:{...newStyle}}, children);
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

