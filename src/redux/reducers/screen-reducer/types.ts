//State types
interface Position {
  x: number,
  y: number,
  id: number,
}

export interface Valves extends Position {
  status: "CLOSE" | "OPEN" | "MOVING",
}

export interface HorizontalPipes extends Position {
  width : number,
}
export interface VerticalPipes extends Position {
  height : number,
}
export interface AnglePipes extends Position {
  connect : "TL" | "TR" | "BL" | "BR",
}

export interface InformationFields extends Position {
  information: string,
}

export interface Sprites {
  valves: Array<Valves>,
  pipes: {
    horizontalPipes: Array<HorizontalPipes>,
    verticalPipes: Array<VerticalPipes>,
    anglePipes: Array<AnglePipes>,
  }
  informationFields: Array<InformationFields>,
}
export interface Resolution {
  width: number,
  height: number,
}

export interface ScreenState {
  resolution: Resolution,
  sprites: Sprites,
}

//Const types
export const UPDATE_SCREEN_RESOLUTION: "screen-reducer/UPDATE_SCREEN_RESOLUTION" = "screen-reducer/UPDATE_SCREEN_RESOLUTION";

//Action types
export interface UpdateScreenResolutionAction {
  type: typeof UPDATE_SCREEN_RESOLUTION,
  payload: Resolution,
}

//Thunk types


export type ScreenActionTypes = UpdateScreenResolutionAction;