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
        targetForAutoMode: 0,
        targetForManualMode: 0,
        kp: 0,
        ki: 0,
        kd: 0,
        deadZone: 0,
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