// auth api
import {checkLoginUser} from "../server-emulator/state/auth-data";

export const authAPI = {
  login: async (email: string, password: string, rememberMe: boolean): Promise<number> => {
    const response = await checkLoginUser(email, password);
    return response; //return -1 if no such email+password combination
  }
}