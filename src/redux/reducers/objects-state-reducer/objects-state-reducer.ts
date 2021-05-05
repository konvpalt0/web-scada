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
        //gas block
        {
          isSignalInit: false, meta: {
            signalId: "10000",
            measure: "C°",
            information: "T gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10002",
            measure: "МПа",
            information: "P gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10004",
            measure: "м3/ч",
            information: "Q gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //steam block
        {
          isSignalInit: false, meta: {
            signalId: "10006",
            measure: "C°",
            information: "T steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10008",
            measure: "МПа",
            information: "P steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10010",
            measure: "м3/ч",
            information: "Q steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //water block
        {
          isSignalInit: false, meta: {
            signalId: "1",
            measure: "%",
            information: "T water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10014",
            measure: "МПа",
            information: "P water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10016",
            measure: "м3/ч",
            information: "Q water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //co2 block
        {
          isSignalInit: false, meta: {
            signalId: "10018",
            measure: "об/мин",
            information: "RPM",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10020",
            measure: "C°",
            information: "T flue gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //oxygen block
        {
          isSignalInit: false, meta: {
            signalId: "10022",
            measure: "%",
            information: "RPM",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //burner block
        {
          isSignalInit: false, meta: {
            signalId: "10024",
            measure: "МПа",
            information: "Underpressure",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10026",
            measure: "дискр",
            information: "Flame",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "10028",
            measure: "мм",
            information: "Level",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
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