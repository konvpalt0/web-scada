// auth api
import {checkLoginUser} from "../server-emulator/state/auth-data";
import axios, {AxiosResponse} from "axios";

const BASE_URL = "http://2d295c9b86d0.ngrok.io/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const authAPI = {
  login: async (email: string, password: string, rememberMe: boolean): Promise<number> => {
    const response = await checkLoginUser(email, password);
    return response; //return -1 if no such email+password combination
  }
}

export const objectAPI = {
  getSensorData: async (objectId: number): Promise<any> => {
    const response = await api.get(`api/getObject?objectID=${objectId}`);
    return response;
  }
}

export const devAPI = {
  setObjectConfiguration: async (payload: SensorsPayload): Promise<void> => {
    const response = await api.post(`api/setSensors`, payload);
  },
  startObject: async (objectId: number): Promise<AxiosResponse<JSON>> => {
    const response = await api.get(`api/startObject?objectID=${objectId}`);
    return response;
  },
  removeSensors: async (objectId: number): Promise<void> => {
    const response = await api.get(`api/removeSensors?objectID=${objectId}`);
  },
  stopObject: async (objectId: number): Promise<void> => {
    const response = await api.get(`api/stopObject?objectID=${objectId}`);
  },
}

// @ts-ignore
window.api = devAPI;

// types
interface Sensor {
  name: string,
  measure: "МПа" | "мм" | "C°" | "%" | "м3/ч" | "Па" | "КПа" | "дискр",
  position: string,
  min: number,
  max: number,
}
interface SensorsPayload {
  objectID: number,
  sensors: Array<Sensor>
}
