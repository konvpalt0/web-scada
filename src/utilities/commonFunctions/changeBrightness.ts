import React from "react";

const changeBrightness = (nativeColor: string = "#000000", adjust: number): React.CSSProperties["color"] => {
  let r = parseInt(nativeColor.slice(1,3), 16);
  let g = parseInt(nativeColor.slice(3,5), 16);
  let b = parseInt(nativeColor.slice(5,7), 16);
  r = r * adjust;
  g = g * adjust;
  b = b * adjust;
  let overR = getOverScore(r);
  let overG = getOverScore(g);
  let overB = getOverScore(b);
  r += overG * 0.5 + overB * 0.5;
  g += overR * 0.5 + overB * 0.5;
  b += overR * 0.5 + overG * 0.5;

  return (`#${fixColors(r,g,b)}`);
}
// @ts-ignore
export default changeBrightness;

const getOverScore = (number: number): number => {
  return number > 255 ? number - 255 : 0;
}
const fixColors = (r: number, g: number, b: number): string => {
  const rr = Math.round(Math.min(255, r)).toString(16);
  const gg = Math.round(Math.min(255, g)).toString(16);
  const bb = Math.round(Math.min(255, b)).toString(16);
  return rr+gg+bb;
}