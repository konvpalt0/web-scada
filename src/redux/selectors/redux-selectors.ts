import {Selectors} from "./types";
import {AlarmsItemType, ObjectState, Regulator, SignalState} from "../reducers/types";


const select: Selectors = {
  //system
  getSystem: state => state.system,
  getIsSystemInit: state => select.getSystem(state).isInit,
  getCurrentObject: state => select.getSystem(state).currentObject,
  getUserData: state => select.getSystem(state).session,
  //screen
  getScreen: state => state.screen,
  getResolution: state => select.getScreen(state).resolution,
  getSprites: state => select.getScreen(state).sprites,
  //development
  getDevelopment: state => state.development,
  getDevelopmentHmi: state => select.getDevelopment(state).hmiState,
  //objectsState
  getObjects: state => state.objects,
  getObjectsState: state => select.getObjects(state).objects,
  //TODO use reselect
  getObjectState: state => objectId => select.getObjectsState(state).find(object => object.objectId === objectId) || nullObject,
  getSignalState: state => objectId => signalId => select.getObjectState(state)(objectId).signals.find(sensor => sensor.meta.signalId === signalId) || nullSignal,
  getIsSensorInit: state => objectId => signalId => select.getSignalState(state)(objectId)(signalId).isSignalInit,
  //regulators
  getRegulators: state => state.regulators,
  getRegulator: state => regulatorId => select.getRegulators(state).regulators.find(regulator => regulator.id === regulatorId) || nullRegulator,
  getRegulatorSettings: state => regulatorId => select.getRegulator(state)(regulatorId).settings,
  //alarms
  getAlarms: state => state.alarms,
  getAlarmsSettings: state => select.getAlarms(state).settings,
  getAlarmsColorSettings: state => select.getAlarmsSettings(state).colors,
  getAlarmsLog: state => select.getAlarms(state).alarmLog,
  //TODO use reselect
  getAlarmsItem: state => alarmId => select.getAlarmsLog(state).find(alarmItem => alarmItem.id === alarmId) || nullAlarm,
}

export {select};

export const nullObject: ObjectState = {
  objectId: "null object",
  signals: [
    {
      isSignalInit: false,
      meta: {
        signalId: "null object",
        information: "null",
        measure: "%",
        min: "0",
        max: "0",
        minAlarm: "0",
        maxAlarm: "0",
        minWarning: "0",
        maxWarning: "0",
      },
      signalState: [
        {
          date: "null object",
          value: "-2",
        },
      ],
    }
  ],
};
export const nullSignal: SignalState = nullObject.signals[0];
export const nullAlarm: AlarmsItemType = {
  id: "null",
  date: "null",
  type: "alarm",
  message: "null",
};
export const nullRegulator: Regulator = {
  id: "null",
  settings: {
    targetForAutoMode: -1,
    targetForManualMode: -1,
    kp: -1,
    ki: -1,
    kd: -1,
    deadZone: -1,
  }
};