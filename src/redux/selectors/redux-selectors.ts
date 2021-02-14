import {ReduxSelectors} from "../../utilities/types/types";

const select: ReduxSelectors = {
  //auth
  getAuth: state => state.auth,
}

export {select};