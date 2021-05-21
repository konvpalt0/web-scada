import {ADD_ALARM, AddAlarmAction, AlarmActionTypes, AlarmsItemType, AlarmState} from "../types";

const initState: AlarmState = {
  settings: {
    colors: {
      alarm: "red",
      warning: "yellow",
      message: "whitesmoke",
    }
  },
  alarmLog: [
    {
      id: "5",
      date: (new Date(Date.now() - 100000)).toLocaleString(),
      message: "Опасный уровень воды в резервуаре",
      type: "warning",
    },
    {
      id: "4",
      date: (new Date(Date.now() - 500000)).toLocaleString(),
      message: "Клапан К-1 открыт",
      type: "message",
    },
    {
      id: "3",
      date: (new Date(Date.now() - 1000000)).toLocaleString(),
      message: "Критический уровень воды в резервуаре",
      type: "alarm",
    },
    {
      id: "2",
      date: (new Date(Date.now() - 3000000)).toLocaleString(),
      message: "Опасный уровень воды в резервуаре",
      type: "warning",
    },
    {
      id: "1",
      date: (new Date(Date.now() - 5000000)).toLocaleString(),
      message: "Клапан К-1 закрыт",
      type: "message",
    },
    {
      id: "0",
      date: (new Date(Date.now() - 10000000)).toLocaleString(),
      message: "Пользователь developer авторизирован в системе",
      type: "message",
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


