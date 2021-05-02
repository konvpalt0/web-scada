import React from "react";
import style from "../Screen.module.css";

const Cell:React.FC<CellType> = ({column, row}) => {
  return (
    <div style={{gridColumn: `${column}/ span 1`, gridRow: `${row}/ span 1`, zIndex: 0, boxShadow: `inset 0 0 0.1rem black`}} className={style.cell}>
    </div>
  )
}

export default Cell;

export type CellType = {
  column: number,
  row: number,
}