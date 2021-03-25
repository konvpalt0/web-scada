import {RootState} from "../store";
import {ObjectState, SensorState} from "../reducers/types";

type Select<T> = (state: RootState) => T;

//system selector
export type SystemSelector = Select<RootState["system"]>;
export type IsSystemInitSelector = Select<RootState["system"]["isInit"]>;
export type CurrentObjectSelector = Select<RootState["system"]["currentObject"]>;
export type UserDataSelector = Select<RootState["system"]["session"]>;
//screen selector
export type ScreenSelector = Select<RootState["screen"]>;
export type ResolutionSelector = Select<RootState["screen"]["resolution"]>;
export type SpritesSelector = Select<RootState["screen"]["sprites"]>;
//development selector
export type DevelopmentSelector = Select<RootState["development"]>;
export type ResponseSelector = Select<RootState["development"]["response"]>;
//objectState selector
export type ObjectsSelector = Select<RootState["objects"]>;
export type ObjectsStateSelector = Select<Array<ObjectState>>;
//TODO add using redux Reselect
export type ObjectSelector = (state: RootState) => (objectId: string) => ObjectState;
export type SensorSelector = (state: RootState) => (objectId: string) => (sensorId: string) => SensorState;
export type IsSensorInitSelector = (state: RootState) => (objectId: string) => (sensorId: string) => boolean;
//selectors
export interface Selectors {
  //system
  getSystem: SystemSelector,
  getIsSystemInit: IsSystemInitSelector,
  getCurrentObject: CurrentObjectSelector,
  getUserData: UserDataSelector,
  //screen
  getScreen: ScreenSelector,
  getResolution: ResolutionSelector,
  getSprites: SpritesSelector,
  //development
  getDevelopment: DevelopmentSelector,
  getResponse: ResponseSelector,
  //objectsState
  getObjects: ObjectsSelector,
  getObjectsState: ObjectsStateSelector,
  getObjectState: ObjectSelector,
  getSensorState: SensorSelector,
  getIsSensorInit: IsSensorInitSelector,
}