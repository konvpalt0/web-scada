import {
  Regulator,
  RegulatorSettings,
  RegulatorsState,
  RegulatorsStateActionsTypes,
  UPDATE_REGULATOR_SETTINGS,
  UpdateRegulatorSettingsAction
} from "../types";

const initialState: RegulatorsState = {
  regulators: [
    {
      id: "0",
      settings: {
        targetForAutoMode: 50,
        targetForManualMode: 50,
        kp: 0.415,
        ki: 0.93,
        kd: 0,
        deadZone: 1,
      }
    }
  ],
}

const regulatorsReducer = (state: RegulatorsState = initialState, action: RegulatorsStateActionsTypes) => {
  switch (action.type) {
    case UPDATE_REGULATOR_SETTINGS:
      return ({
        ...state,
        regulators: changeRegulatorSettings(action.id, action.payload, state.regulators),
      });
    default:
      return state;
  }
}

export default regulatorsReducer;

export const updateRegulatorSettings = (id: string, payload: RegulatorSettings): UpdateRegulatorSettingsAction => ({
  type: UPDATE_REGULATOR_SETTINGS,
  payload: payload,
  id: id,
});

const changeRegulatorSettings = (id: string, payload: RegulatorSettings, regulators: Array<Regulator>): Array<Regulator> => {
  return regulators.map(regulator => {
    if (regulator.id !== id) return regulator;
    return {...regulator, settings: payload};
  })
}