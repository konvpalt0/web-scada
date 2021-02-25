import {RootState} from "../store";

//system selector
export type SystemSelector = (state: RootState) => RootState["system"];
//screen selector
export type ScreenSelector = (state: RootState) => RootState["screen"];
export type ResolutionSelector = (state: RootState) => RootState["screen"]["resolution"];
//selectors
export interface Selectors {
  getSystem: SystemSelector,
  getScreen: ScreenSelector,
  getResolution: ResolutionSelector,
}