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