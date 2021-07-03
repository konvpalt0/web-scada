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
            signalId: "gas_temp",
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
              value: "45",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "gas_pressure",
            measure: "КПа",
            information: "P gas",
            min: "0",
            max: "100",
            minAlarm: "40",
            maxAlarm: "60",
            minWarning: "47.5",
            maxWarning: "52.5",
          }, signalState: [
            {
              date: "init",
              value: "48",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "gas_rate",
            measure: "м3/ч",
            information: "Q gas",
            min: "0",
            max: "350",
            minAlarm: "180",
            maxAlarm: "290",
            minWarning: "230",
            maxWarning: "270",
          }, signalState: [
            {
              date: "init",
              value: "255",
            },
          ],
        },//
        //steam block
        {
          isSignalInit: false, meta: {
            signalId: "steam_temp",
            measure: "C°",
            information: "T steam",
            min: "100",
            max: "250",
            minAlarm: "160",
            maxAlarm: "230",
            minWarning: "185",
            maxWarning: "215",
          }, signalState: [
            {
              date: "init",
              value: "194",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "steam_pressure",
            measure: "МПа",
            information: "P steam",
            min: "0.9",
            max: "1.6",
            minAlarm: "1.1",
            maxAlarm: "1.5",
            minWarning: "1.2",
            maxWarning: "1.4",
          }, signalState: [
            {
              date: "init",
              value: "1.3",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "steam_rate",
            measure: "т/ч",
            information: "Q steam",
            min: "0",
            max: "40",
            minAlarm: "15",
            maxAlarm: "35",
            minWarning: "20",
            maxWarning: "30",
          }, signalState: [
            {
              date: "init",
              value: "25",
            },
          ],
        },//
        //water block
        {
          isSignalInit: false, meta: {
            signalId: "water_temp",
            measure: "C°",
            information: "T water",
            min: "0",
            max: "100",
            minAlarm: "5",
            maxAlarm: "95",
            minWarning: "15",
            maxWarning: "90",
          }, signalState: [
            {
              date: "init",
              value: "45",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "water_pressure",
            measure: "МПа",
            information: "P water",
            min: "0",
            max: "2",
            minAlarm: "1",
            maxAlarm: "1.8",
            minWarning: "1.1",
            maxWarning: "1.6",
          }, signalState: [
            {
              date: "init",
              value: "1.4",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "water_rate",
            measure: "м3/ч",
            information: "Q water",
            min: "0",
            max: "20",
            minAlarm: "0",
            maxAlarm: "18",
            minWarning: "1",
            maxWarning: "15",
          }, signalState: [
            {
              date: "init",
              value: "3",
            },
          ],
        },//
        //co2 block
        {
          isSignalInit: false, meta: {
            signalId: "smoke_fan_rmp",
            measure: "об/мин",
            information: "RPM",
            min: "0",
            max: "2000",
            minAlarm: "100",
            maxAlarm: "1800",
            minWarning: "200",
            maxWarning: "1600",
          }, signalState: [
            {
              date: "init",
              value: "400",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "smoke_temp",
            measure: "C°",
            information: "T flue gas",
            min: "100",
            max: "250",
            minAlarm: "150",
            maxAlarm: "220",
            minWarning: "180",
            maxWarning: "200",
          }, signalState: [
            {
              date: "init",
              value: "188",
            },
          ],
        },//
        //oxygen block
        {
          isSignalInit: false, meta: {
            signalId: "air_fan_rpm",
            measure: "об/мин",
            information: "RPM",
            min: "0",
            max: "2000",
            minAlarm: "200",
            maxAlarm: "1800",
            minWarning: "300",
            maxWarning: "1600",
          }, signalState: [
            {
              date: "init",
              value: "700",
            },
          ],
        },//
        //burner block
        {
          isSignalInit: false, meta: {
            signalId: "burner_pressure",
            measure: "Па",
            information: "Underpressure",
            min: "0",
            max: "1000",
            minAlarm: "500",
            maxAlarm: "900",
            minWarning: "633",
            maxWarning: "700",
          }, signalState: [
            {
              date: "init",
              value: "687",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "burner_flame",
            measure: "дискр",
            information: "Flame",
            min: "0",
            max: "1",
            minAlarm: "0",
            maxAlarm: "1",
            minWarning: "0",
            maxWarning: "1",
          }, signalState: [
            {
              date: "init",
              value: "1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "boiler_level",
            measure: "мм",
            information: "Level",
            min: "0",
            max: "1000",
            minAlarm: "200",
            maxAlarm: "800",
            minWarning: "400",
            maxWarning: "700",
          }, signalState: [
            {
              date: "init",
              value: "600",
            },
          ],
        },//valves
        {
          isSignalInit: false, meta: {
            signalId: "valve_gas",
            measure: "дискр",
            information: "valve status",
            min: "-1",
            max: "1",
            minAlarm: "-1",
            maxAlarm: "1",
            minWarning: "-1",
            maxWarning: "1",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "valve_steam",
            measure: "дискр",
            information: "valve status",
            min: "-1",
            max: "1",
            minAlarm: "-1",
            maxAlarm: "1",
            minWarning: "-1",
            maxWarning: "1",
          }, signalState: [
            {
              date: "init",
              value: "-1",
            },
          ],
        },//
        {
          isSignalInit: false, meta: {
            signalId: "valve_water",
            measure: "дискр",
            information: "valve status",
            min: "-1",
            max: "1",
            minAlarm: "-1",
            maxAlarm: "1",
            minWarning: "-1",
            maxWarning: "1",
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