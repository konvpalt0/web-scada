import { Selectors } from "./types";


const select: Selectors = {
  //system
  getSystem: state => state.system,
  //screen
  getScreen: state => state.screen,
  getResolution: state => select.getScreen(state).resolution,
  getSprites: state => select.getScreen(state).sprites,
  //development
  getDevelopment: state => state.development,
  getResponse: state => select.getDevelopment(state).response,
}

export {select};