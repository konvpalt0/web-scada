// auth api
import {checkLoginUser} from "../server-emulator/state/auth-data";
import axios, {AxiosResponse} from "axios";
import {HMIState, SensorsPayload} from "../../redux/reducers/development-reducer/types";
import {ObjectState} from "../../redux/reducers/screen-reducer/types";

const BASE_URL = "http://118fd33c1dab.ngrok.io/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const authAPI = {
  login: async (email: string, password: string, rememberMe: boolean): Promise<number> => {
    return await checkLoginUser(email, password, rememberMe); //return -1 if no such email+password combination
  }
}

export const objectAPI = {
  getObjectState: async (objectId: number): Promise<ObjectState> => {
    return await api.get(`api/getObject?objectID=${objectId}`);
  }
}

export const devAPI = {
  setObjectConfiguration: async (payload: SensorsPayload): Promise<AxiosResponse<JSON>> => {
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
  },
}

// @ts-ignore
window.api = devAPI;

