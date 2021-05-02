import {
  GetInitSensorState,
  GetObjectState,
  GetSensorState,
  Objects,
  ObjectsStateActions,
  ObjectState,
  SensorData,
  SensorState,
  UPDATE_IS_SENSOR_INIT,
  UPDATE_SENSOR_STATE,
  UpdateIsSensorInit,
  UpdateSensorAction
} from "../types";
import {Dispatch} from "redux";
import {objectAPI} from "../../../utilities/axiosApi/axios-api";

const initialObjectsState: Objects = {
  objects: [
    {
      objectId: "1",
      sensors: [
        //gas block
        {
          isSensorInit: false, meta: {
            sensorTag: "10000",
            measure: "C°",
            information: "T gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "28",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10002",
            measure: "МПа",
            information: "P gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "30",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10004",
            measure: "м3/ч",
            information: "Q gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "32",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //steam block
        {
          isSensorInit: false, meta: {
            sensorTag: "10006",
            measure: "C°",
            information: "T steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "15",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10008",
            measure: "МПа",
            information: "P steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "17",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10010",
            measure: "м3/ч",
            information: "Q steam",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "19",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //water block
        {
          isSensorInit: false, meta: {
            sensorTag: "1",
            measure: "%",
            information: "T water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "5",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10014",
            measure: "МПа",
            information: "P water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "7",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10016",
            measure: "м3/ч",
            information: "Q water",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "54",
            y: "9",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //co2 block
        {
          isSensorInit: false, meta: {
            sensorTag: "10018",
            measure: "об/мин",
            information: "RPM",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "4",
            y: "5",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10020",
            measure: "C°",
            information: "T flue gas",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "4",
            y: "7",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //oxygen block
        {
          isSensorInit: false, meta: {
            sensorTag: "10022",
            measure: "%",
            information: "RPM",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "4",
            y: "32",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        //burner block
        {
          isSensorInit: false, meta: {
            sensorTag: "10024",
            measure: "МПа",
            information: "Underpressure",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "23",
            y: "29",
          }, sensorState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSensorInit: false, meta: {
            sensorTag: "10026",
            measure: "дискр",
            information: "Flame",
            min: "0",
            max: "100",
            minAlarm: "20",
            maxAlarm: "80",
            minWarning: "30",
            maxWarning: "70",
            x: "33",
            y: "29",
          }, sensorState: [
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
const changeSensors = (sensors: Array<SensorState>, sensorToChange: string, payload: SensorData) => {
  return sensors.map(sensor => {
    if (sensor.meta.sensorTag !== sensorToChange) {
      return sensor
    }
    return {
      ...sensor,
      sensorState: [...sensor.sensorState, payload].slice(-50),
    }
  })
}
const changeObject = (objects: Array<ObjectState>, objectToChange: string, sensorToChange: string, payload: SensorData): Array<ObjectState> => {
  return objects.map(object => {
    if (object.objectId !== objectToChange) {
      return object
    }
    return {
      ...object,
      sensors: changeSensors(object.sensors, sensorToChange, payload),
    }
  })
}

const objectsStateReducer = (state: Objects = initialObjectsState, action: ObjectsStateActions) => {
  switch (action.type) {
    case UPDATE_SENSOR_STATE: {
      return {
        ...state,
        objects: changeObject(state.objects, action.objectId, action.sensorTag, action.payload),
      }
    }
    case UPDATE_IS_SENSOR_INIT: {
      return {
        ...state,
        objects: state.objects.map(object => object.objectId === action.objectId ? {...object,
          sensors: object.sensors.map(sensor => sensor.meta.sensorTag === action.sensorTag ? {
            ...sensor,
            isSensorInit: true
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
export const updateSensor = (newSensorState: SensorData, objectId: string, sensorTag: string): UpdateSensorAction => ({
  type: UPDATE_SENSOR_STATE,
  payload: newSensorState,
  objectId,
  sensorTag,
});
export const updateIsSensorInit = (objectId: string, sensorId: string): UpdateIsSensorInit => ({
  type: UPDATE_IS_SENSOR_INIT,
  objectId,
  sensorTag: sensorId,
})
//THUNK
export const getObjectState = (objectId: string): GetObjectState => async (dispatch: Dispatch<UpdateSensorAction>) => {
  const response = await objectAPI.getObjectState(objectId);
  response.forEach(sensor => dispatch(updateSensor({...sensor.sensorState[0]}, objectId, sensor.meta.sensorTag)));
}
export const getSensorState = (objectId: string, sensorId: string): GetSensorState => async (dispatch: Dispatch<UpdateSensorAction>) => {
  const response = await objectAPI.getSensorState(objectId, sensorId);
  //TODO bug [0] hardcode
  response.forEach(sensor => dispatch(updateSensor(sensor, objectId, sensorId)));
}
export const initSensorState = (objectId: string, sensorId: string): GetInitSensorState => async (dispatch) => {
  dispatch(updateIsSensorInit(objectId, sensorId));
  //const response = await objectAPI.getSensorState(objectId, sensorId, 50);
  //response.forEach(sensor => dispatch(updateSensor(sensor, objectId, sensorId)));
  dispatch(updateIsSensorInit(objectId, sensorId));
}