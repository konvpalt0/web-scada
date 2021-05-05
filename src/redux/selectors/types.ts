import {RootState} from "../store";
import {AlarmsItemType, ObjectState, Regulator, RegulatorSettings, SignalState} from "../reducers/types";

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
export type DevelopmentHmiSelector = Select<RootState["development"]["hmiState"]>;
//objectState selector
export type ObjectsSelector = Select<RootState["objects"]>;
export type ObjectsStateSelector = Select<Array<ObjectState>>;
//TODO add using redux Reselect
export type ObjectSelector = (state: RootState) => (objectId: string) => ObjectState;
export type SignalSelector = (state: RootState) => (objectId: string) => (sensorId: string) => SignalState;
export type IsSensorInitSelector = (state: RootState) => (objectId: string) => (sensorId: string) => boolean;
//regulators selector
export type RegulatorsSelector = Select<RootState["regulators"]>;
export type RegulatorSelector = (state: RootState) => (regulatorId: string) => Regulator;
export type RegulatorSettingsSelector = (state: RootState) => (regulatorId: string) => RegulatorSettings;
//alarms selector
export type AlarmsSelector = Select<RootState["alarms"]>;
export type AlarmsSettingSelector = Select<RootState["alarms"]["settings"]>;
export type AlarmsColorSettings = Select<RootState["alarms"]["settings"]["colors"]>;
export type AlarmsLogSelector = Select<RootState["alarms"]["alarmLog"]>;
export type AlarmsItemSelector = (state: RootState) => (alarmId: string) => AlarmsItemType;

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
  getDevelopmentHmi: DevelopmentHmiSelector,
  //objectsState
  getObjects: ObjectsSelector,
  getObjectsState: ObjectsStateSelector,
  getObjectState: ObjectSelector,
  getSignalState: SignalSelector,
  getIsSensorInit: IsSensorInitSelector,
  //regulators
  getRegulators: RegulatorsSelector,
  getRegulator: RegulatorSelector,
  getRegulatorSettings: RegulatorSettingsSelector,
  //alarms
  getAlarms: AlarmsSelector,
  getAlarmsSettings: AlarmsSettingSelector,
  getAlarmsColorSettings: AlarmsColorSettings,
  getAlarmsLog: AlarmsLogSelector,
  getAlarmsItem: AlarmsItemSelector,
}