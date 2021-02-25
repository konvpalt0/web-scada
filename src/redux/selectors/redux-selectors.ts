import { Selectors } from "./types";


const select: Selectors = {
  //system
  getSystem: state => state.system,
  //screen
  getScreen: state => state.screen,
  getResolution: state => select.getScreen(state).resolution,
}

export {select};