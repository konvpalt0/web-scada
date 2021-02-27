import {RootState} from "../store";

type Select<T> = (state: RootState) => T;

//system selector
export type SystemSelector = Select<RootState["system"]>;
//screen selector
export type ScreenSelector = Select<RootState["screen"]>;
export type ResolutionSelector = Select<RootState["screen"]["resolution"]>;
export type SpritesSelector = Select<RootState["screen"]["sprites"]>;
//selectors
export interface Selectors {
  getSystem: SystemSelector,
  getScreen: ScreenSelector,
  getResolution: ResolutionSelector,
  getSprites: SpritesSelector,
}