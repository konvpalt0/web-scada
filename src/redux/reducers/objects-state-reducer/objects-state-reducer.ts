import {
  GetInitSensorState,
  GetObjectState,
  GetSensorState,
  Objects,
  ObjectsStateActions,
  ObjectState,
  SignalData,
  SignalState,
  UPDATE_IS_SENSOR_INIT,
  UPDATE_SENSOR_STATE,
  UpdateIsSensorInit,
  UpdateSensorAction
} from "../types";
import {Dispatch} from "redux";
import {devAPI, level, objectAPI} from "../../../utilities/axiosApi/axios-api";

const initialObjectsState: Objects = {
  objects: [
    {
      objectId: "1",
      signals: [
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_1_level",
            measure: "мм",
            information: "level",
            min: "0",
            max: "10000",
            maxAlarm: "9900",
            maxWarning: "9800",
            minAlarm: "100",
            minWarning: "200",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "1800",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_2_level",
            measure: "мм",
            information: "level",
            min: "0",
            max: "10000",
            maxAlarm: "9900",
            maxWarning: "9800",
            minAlarm: "100",
            minWarning: "200",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "1100",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_3_level",
            measure: "мм",
            information: "level",
            min: "0",
            max: "10000",
            maxAlarm: "9900",
            maxWarning: "9800",
            minAlarm: "100",
            minWarning: "200",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "1200",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_4_level",
            measure: "мм",
            information: "level",
            min: "0",
            max: "10000",
            maxAlarm: "9900",
            maxWarning: "9800",
            minAlarm: "100",
            minWarning: "200",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "1500",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_1_temp",
            measure: "C°",
            information: "temperature",
            min: "0",
            max: "100",
            maxAlarm: "60",
            maxWarning: "50",
            minAlarm: "10",
            minWarning: "15",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "23.5",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_2_temp",
            measure: "C°",
            information: "temperature",
            min: "0",
            max: "100",
            maxAlarm: "60",
            maxWarning: "50",
            minAlarm: "10",
            minWarning: "15",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "24",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_3_temp",
            measure: "C°",
            information: "temperature",
            min: "0",
            max: "100",
            maxAlarm: "60",
            maxWarning: "50",
            minAlarm: "10",
            minWarning: "15",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "24.5",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "tank_4_temp",
            measure: "C°",
            information: "temperature",
            min: "0",
            max: "100",
            maxAlarm: "60",
            maxWarning: "50",
            minAlarm: "10",
            minWarning: "15",
          },
          signalState: [
            {
              date: new Date()+"",
              value: "25",
            }
          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_1",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_2",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_3",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_4",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_5",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_6",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_1_7",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_1",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_2",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_3",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_4",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_5",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_6",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_2_7",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_1",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_2",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_3",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_4",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_5",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_6",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_3_7",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_1",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_2",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_3",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_4",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_5",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_6",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
        {
          isSignalInit: false,
          meta: {
            signalId: "valve_4_7",
            measure: "дискр",
            information: "time",
            min: "0",
            max: "1",
            maxAlarm: "1",
            maxWarning: "1",
            minAlarm: "1",
            minWarning: "1",
          },
          signalState: [

          ],
        },
      ],
    }
  ]
};
const changeSensors = (sensors: Array<SignalState>, sensorToChange: string, payload: SignalData): SignalState[] => {
  return sensors.map(sensor => {
    if (sensor.meta.signalId !== sensorToChange) {
      return sensor
    }
    return {
      ...sensor,
      signalState: [...sensor.signalState, payload].slice(-50),
    }
  })
}
const changeObject = (objects: Array<ObjectState>, objectToChange: string, sensorToChange: string, payload: SignalData): Array<ObjectState> => {
  return objects.map(object => {
    if (object.objectId !== objectToChange) {
      return object
    }
    return {
      ...object,
      signals: changeSensors(object.signals, sensorToChange, payload),
    }
  })
}

const objectsStateReducer = (state: Objects = initialObjectsState, action: ObjectsStateActions) => {
  switch (action.type) {
    case UPDATE_SENSOR_STATE: {
      return {
        ...state,
        objects: changeObject(state.objects, action.objectId, action.signalId, action.payload),
      }
    }
    case UPDATE_IS_SENSOR_INIT: {
      return {
        ...state,
        objects: state.objects.map(object => object.objectId === action.objectId ? {...object,
          signals: object.signals.map(sensor => sensor.meta.signalId === action.signalId ? {
            ...sensor,
            isSignalInit: true
          } : sensor)
        } : object)
      }
    }
    default:
      return state;
  }
}
export default objectsStateReducer;
//AC
export const updateSensor = (newSensorState: SignalData, objectId: string, signalId: string): UpdateSensorAction => ({
  type: UPDATE_SENSOR_STATE,
  payload: newSensorState,
  objectId,
  signalId,
});
export const updateIsSensorInit = (objectId: string, sensorId: string): UpdateIsSensorInit => ({
  type: UPDATE_IS_SENSOR_INIT,
  objectId,
  signalId: sensorId,
})
//THUNK
export const getObjectState = (objectId: string): GetObjectState => async (dispatch: Dispatch<UpdateSensorAction>) => {
  const response = await objectAPI.getObjectState(objectId);
  response.forEach(sensor => dispatch(updateSensor({...sensor.signalState[0]}, objectId, sensor.meta.signalId)));
}
export const getSensorState = (objectId: string, sensorId: string): GetSensorState => async (dispatch: Dispatch<UpdateSensorAction>) => {
  // const response = await objectAPI.getSensorState(objectId, sensorId);
  // //TODO bug [0] hardcode
  // response.forEach(sensor => dispatch(updateSensor(sensor, objectId, sensorId)));
  //TODO remove test
  const response = level.output;
  dispatch(updateSensor({date: new Date()+"", value: response+""}, objectId, sensorId));
}
export const initSensorState = (objectId: string, sensorId: string): GetInitSensorState => async (dispatch) => {
  dispatch(updateIsSensorInit(objectId, sensorId));
  //const response = await objectAPI.getSensorState(objectId, sensorId, 50);
  //response.forEach(sensor => dispatch(updateSensor(sensor, objectId, sensorId)));
}