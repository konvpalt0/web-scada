import {Selectors} from "./types";
import {AlarmsItemType, ObjectState, SensorState} from "../reducers/types";


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
  getResponse: state => select.getDevelopment(state).response,
  //objectsState
  getObjects: state => state.objects,
  getObjectsState: state => select.getObjects(state).objects,
  //TODO use reselect
  getObjectState: state => objectId => select.getObjectsState(state).find(object => object.objectId === objectId) || nullObject,
  getSensorState: state => objectId => sensorId => select.getObjectState(state)(objectId).sensors.find(sensor => sensor.meta.sensorTag === sensorId) || nullSensor,
  getIsSensorInit: state => objectId => sensorId => select.getSensorState(state)(objectId)(sensorId).isSensorInit,
  //alarms
  getAlarms: state => state.alarms,
  getAlarmsSettings: state => select.getAlarms(state).settings,
  getAlarmsColorSettings: state => select.getAlarmsSettings(state).colors,
  getAlarmsLog: state => select.getAlarms(state).alarmLog,
  //TODO use reselect
  getAlarmsItem: state => alarmId => select.getAlarmsLog(state).find(alarmItem => alarmItem.id === alarmId) || nullAlarm,
}

export {select};

const nullObject: ObjectState = {
  objectId: "null object",
  sensors: [
    {
      isSensorInit: false,
      meta: {
        sensorTag: "null object",
        information: "null",
        measure: "%",
        x: 0,
        y: 0,
      },
      sensorState: [
        {
          date: "null object",
          value: "-2",
        },
      ],
    }
  ],
};
const nullSensor: SensorState = {
  isSensorInit: false,
  meta: {
    measure: "%",
    sensorTag: "null sensor",
    information: "null",
    x: 0,
    y: 0,
  },
  sensorState: [
    {
      date: "null sensor",
      value: "-2",
    },
  ],
};
const nullAlarm: AlarmsItemType = {
  id: "null",
  date: "null",
  type: "alarm",
  message: "null",
}