// auth api
import {checkLoginUser} from "../server-emulator/state/auth-data";
import axios, {AxiosResponse} from "axios";
import {RegulatorSettings, SensorData, SensorState} from "../../redux/reducers/types";

const BASE_URL = "http://b6f0cc88263f.ngrok.io";

const api = axios.create({
  baseURL: BASE_URL,
});

export const authAPI = {
  login: async (email: string, password: string, rememberMe: boolean): Promise<number> => {
    return await checkLoginUser(email, password, rememberMe); //return -1 if no such email+password combination
  }
}

export const objectAPI = {
  getObjectState: async (objectId: string): Promise<Array<SensorState>> => {
    const response = await api.get(`api/getState?objectID=${objectId}`);
    return response.data.response.objectState;
  },
  getSensorState: async (objectId: string, sensorId: string, steps?: number): Promise<Array<SensorData>> => {
    const response = await api.get(`api/getState?objectID=${objectId}&sensorTag=${sensorId}${steps ? `&steps=${steps}` : ``}`);
    return response.data.response.objectState[0].sensorState;
  },
  getRegulatorState: async (objectId: string, regulatorId: string): Promise<RegulatorSettings> => {
    const response = await api.get(`api/getRegulator?objectID=${objectId}&regulatorId=${regulatorId}`);
    return response.data.response;
  }
}

export const devAPI = {
  /*setObjectConfiguration: async (payload: SensorsPayload): Promise<AxiosResponse<JSON>> => {
    return await api.post(`api/setSensors`, payload);
  },
  startObject: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    return await api.get(`api/startObject?objectID=${objectId}`);
  },
  removeSensors: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    return await api.get(`api/removeSensors?objectID=${objectId}`);
  },
  stopObject: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    return await api.get(`api/stopObject?objectID=${objectId}`);
  },
  getHMI: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    return await api.get(`api/getHMI?objectID=${objectId}`);
  },
  setHMI: async (payload: HMIState): Promise<AxiosResponse<JSON>> => {
    return await api.post(`api/setHMI`, payload);
  },
  removeHMI: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    return await api.get(`api/removeHMI?objectID=${objectId}`);
  },*/
}

// @ts-ignore
window.api = devAPI;

