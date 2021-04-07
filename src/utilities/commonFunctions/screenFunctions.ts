import React from "react";
import changeBrightness from "./changeBrightness";

export const getGridArea = (xStart: number, yStart: number, xEnd: number, yEnd: number):React.CSSProperties => {
  return {
    gridColumn: `${xStart}/${xEnd}`,
    gridRow: `${yStart}/${yEnd}`,
  }
}

export const getPipeStyle = (xStart: number, yStart: number, xEnd: number, yEnd: number, rule: "TL" | "TR" | "BL" | "BR" | "horizontal" | "vertical", color: React.CSSProperties["color"]): React.CSSProperties => {
  const getBackAndGrid = (background: string): React.CSSProperties => {
    return ({
      gridColumn: `${xStart}/${xEnd}`,
      gridRow: `${yStart}/${yEnd}`,
      background: background,
    })
  }

  const gradientColor = (color: React.CSSProperties["color"]): string => {
    const a = `${changeBrightness(color, 0.5)}, ${color}, ${changeBrightness(color, 0.5)}`;
    return a
  }

  switch (rule) {
    case "TL":
      return getBackAndGrid(`radial-gradient(farthest-side at 0% 0%, ${gradientColor(color)} 100%, rgba(255,255,255,0))`);
    case "TR":
      return getBackAndGrid(`radial-gradient(farthest-side at 100% 0%, ${gradientColor(color)} 100%, rgba(255,255,255,0))`);
    case "BL":
      return getBackAndGrid(`radial-gradient(farthest-side at 0% 100%, ${gradientColor(color)} 100%, rgba(255,255,255,0))`);
    case "BR":
      return getBackAndGrid(`radial-gradient(farthest-side at 100% 100%, ${gradientColor(color)} 100%, rgba(255,255,255,0))`);
    case "horizontal":
      return getBackAndGrid(`linear-gradient(${gradientColor(color)})`);
    case "vertical":
      return getBackAndGrid(`linear-gradient(90deg, ${gradientColor(color)})`);
    default:
      return getBackAndGrid(`linear-gradient(90deg, ${gradientColor("#ff0000")})`);
  }
}