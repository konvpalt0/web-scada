import {ADD_ALARM, AddAlarmAction, AlarmActionTypes, AlarmsItemType, AlarmState} from "../types";

const initState: AlarmState = {
  settings: {
    colors: {
      alarm: "red",
      warning: "yellow",
      message: "blue",
    }
  },
  alarmLog: [
    {
      id: "0",
      date: "some date",
      message: "some message",
      type: "message",
    },
    {
      id: "1",
      date: "some date",
      message: "some message",
      type: "alarm",
    },
    {
      id: "2",
      date: "some date",
      message: "some message",
      type: "warning",
    }
  ]
}

const alarmReducer = (state: AlarmState = initState, action: AlarmActionTypes): AlarmState => {
  switch (action.type) {
    case ADD_ALARM:
      return {
        ...state,
        alarmLog: [...state.alarmLog, action.payload],
      }
    default:
      return state;
  }
}

export default alarmReducer;

export const addAlarm = (alarmItem: AlarmsItemType): AddAlarmAction => ({type: ADD_ALARM, payload: alarmItem});


