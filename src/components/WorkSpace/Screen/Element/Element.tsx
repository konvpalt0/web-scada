import React from "react";

export type ElementOwnProps = {
  columnStart: number,
  columnEnd: number,
  rowStart: number,
  rowEnd: number,
  className: string,
}

type Props = ElementOwnProps;

const Element: React.FC<Props> = ({columnStart,columnEnd,rowStart,rowEnd, className}) => {
  return (
    <div className={className} style={{gridColumn: `${columnStart}/${columnEnd}`, gridRow: `${rowStart}/${rowEnd}`}}/>
  )
}

export default Element;