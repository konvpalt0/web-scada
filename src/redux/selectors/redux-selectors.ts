import { Selectors } from "./types";


const select: Selectors = {
  //auth
  getSystem: state => state.system,
}

export {select};