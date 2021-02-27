import {RootState} from "../store";

type Select<T> = (state: RootState) => T;

//system selector
export type SystemSelector = Select<RootState["system"]>;
//screen selector
export type ScreenSelector = Select<RootState["screen"]>;
export type ResolutionSelector = Select<RootState["screen"]["resolution"]>;
export type SpritesSelector = Select<RootState["screen"]["sprites"]>;
//development selector
export type DevelopmentSelector = Select<RootState["development"]>;
export type ResponseSelector = Select<RootState["development"]["response"]>;
//selectors
export interface Selectors {
  //system
  getSystem: SystemSelector,
  //screen
  getScreen: ScreenSelector,
  getResolution: ResolutionSelector,
  getSprites: SpritesSelector,
  //development
  getDevelopment: DevelopmentSelector,
  getResponse: ResponseSelector,
}