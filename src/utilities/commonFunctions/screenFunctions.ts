interface GridArea {
  gridColumn: string,
  gridRow: string,
}

export const getGridArea = (xStart: number, yStart: number, xEnd: number, yEnd: number): GridArea => {
  return {
    gridColumn: `${xStart}/${xEnd}`,
    gridRow: `${yStart}/${yEnd}`,
  }
}