import {
  HmiSprite, InformationBlockSpec, InformationFieldSpec, PipeSpec,
  Resolution,
  ScreenActionTypes,
  ScreenState,
  Sprites, TankSpec,
  UPDATE_SCREEN_RESOLUTION,
  UPDATE_SCREEN_SINGLE_SPRITE,
  UPDATE_SCREEN_SPRITES,
  UpdateScreenResolutionAction,
  UpdateScreenSingleSpriteAction,
  UpdateScreenSpritesAction, ValveSpec
} from "../types";

export const initState: ScreenState = {
  resolution: {
    height: 480,
    width: 854,
  },
  sprites: {
    valves: {
      valveItems: [
        {position: {x: 2, y: 17}, meta: {id: "valve_1_1", description: "tank 1 valve 1"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 5, y: 17}, meta: {id: "valve_1_2", description: "tank 1 valve 2"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 5, y: 23}, meta: {id: "valve_1_3", description: "tank 1 valve 3"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 8, y: 23}, meta: {id: "valve_1_4", description: "tank 1 valve 4"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 11, y: 17}, meta: {id: "valve_1_5", description: "tank 1 valve 5"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 11, y: 23}, meta: {id: "valve_1_6", description: "tank 1 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 14, y: 23}, meta: {id: "valve_1_6", description: "tank 1 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//

        {position: {x: 18, y: 17}, meta: {id: "valve_2_1", description: "tank 2 valve 1"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 21, y: 17}, meta: {id: "valve_2_2", description: "tank 2 valve 2"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 21, y: 23}, meta: {id: "valve_2_3", description: "tank 2 valve 3"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 24, y: 23}, meta: {id: "valve_2_4", description: "tank 2 valve 4"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 27, y: 17}, meta: {id: "valve_2_5", description: "tank 2 valve 5"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 27, y: 23}, meta: {id: "valve_2_6", description: "tank 2 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 30, y: 23}, meta: {id: "valve_2_6", description: "tank 2 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//

        {position: {x: 34, y: 17}, meta: {id: "valve_3_1", description: "tank 3 valve 1"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 37, y: 17}, meta: {id: "valve_3_2", description: "tank 3 valve 2"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 37, y: 23}, meta: {id: "valve_3_3", description: "tank 3 valve 3"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 40, y: 23}, meta: {id: "valve_3_4", description: "tank 3 valve 4"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 43, y: 17}, meta: {id: "valve_3_5", description: "tank 3 valve 5"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 43, y: 23}, meta: {id: "valve_3_6", description: "tank 3 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 46, y: 23}, meta: {id: "valve_3_6", description: "tank 3 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//

        {position: {x: 50, y: 17}, meta: {id: "valve_4_1", description: "tank 4 valve 1"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 53, y: 17}, meta: {id: "valve_4_2", description: "tank 4 valve 2"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 53, y: 23}, meta: {id: "valve_4_3", description: "tank 4 valve 3"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 56, y: 23}, meta: {id: "valve_4_4", description: "tank 4 valve 4"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 59, y: 17}, meta: {id: "valve_4_5", description: "tank 4 valve 5"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 59, y: 23}, meta: {id: "valve_4_6", description: "tank 4 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//
        {position: {x: 62, y: 23}, meta: {id: "valve_4_6", description: "tank 4 valve 6"}, spec: {status: "MOVING", orientation: "90"}},//
      ],
    },
    pipes: {
      pipesColor: {
        air: "#ffffff",
        gas: "#766b3d",
        oil: "#73784e",
        steam: "#72767d",
        water: "#435661",
        smoke: "#738276",
      },
      pipeItems: [
        {position: {x: 2, y: 14}, meta: {id: "pipe_1_1_1", description: "pipe_1"}, spec: {type: "gas", orientation: "vertical", height: 20}},
        //
        {position: {x: 5, y: 14}, meta: {id: "pipe_1_2_1", description: "pipe_2"}, spec: {type: "smoke", orientation: "vertical", height: 18}},
        {position: {x: 5, y: 32}, meta: {id: "pipe_1_2_2", description: "pipe_2"}, spec: {type: "smoke", orientation: "TR"}},
        //
        {position: {x: 6, y: 20}, meta: {id: "pipe_1_3", description: "pipe_3"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 8, y: 20}, meta: {id: "pipe_1_4", description: "pipe_4"}, spec: {type: "steam", orientation: "BL"}},
        //
        {position: {x: 8, y: 21}, meta: {id: "pipe_1_5_1", description: "pipe_5"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        {position: {x: 8, y: 30}, meta: {id: "pipe_1_5_2", description: "pipe_5"}, spec: {type: "steam", orientation: "TR"}},
        //
        {position: {x: 11, y: 14}, meta: {id: "pipe_1_6_1", description: "pipe_6"}, spec: {type: "water", orientation: "vertical", height: 20}},
        {position: {x: 11, y: 34}, meta: {id: "pipe_1_6_2", description: "pipe_6"}, spec: {type: "water", orientation: "TL"}},
        {position: {x: 11, y: 34}, meta: {id: "pipe_1_6_3", description: "pipe_6"}, spec: {type: "water", orientation: "horizontal", width: -4}},
        //
        {position: {x: 12, y: 20}, meta: {id: "pipe_1_7", description: "pipe_7"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 14, y: 20}, meta: {id: "pipe_1_8", description: "pipe_8"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 14, y: 21}, meta: {id: "pipe_1_9", description: "pipe_9"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        //
        {position: {x: 18, y: 14}, meta: {id: "pipe_2_1", description: "pipe_1"}, spec: {type: "gas", orientation: "vertical", height: 13}},
        //
        {position: {x: 21, y: 14}, meta: {id: "pipe_2_2", description: "pipe_2"}, spec: {type: "smoke", orientation: "vertical", height: 18}},
        {position: {x: 22, y: 20}, meta: {id: "pipe_2_3", description: "pipe_3"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 24, y: 20}, meta: {id: "pipe_2_4", description: "pipe_4"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 24, y: 21}, meta: {id: "pipe_2_5", description: "pipe_5"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        {position: {x: 27, y: 14}, meta: {id: "pipe_2_6", description: "pipe_6"}, spec: {type: "water", orientation: "vertical", height: 14}},
        {position: {x: 28, y: 20}, meta: {id: "pipe_2_7", description: "pipe_7"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 30, y: 20}, meta: {id: "pipe_2_8", description: "pipe_8"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 30, y: 21}, meta: {id: "pipe_2_9", description: "pipe_9"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        //
        {position: {x: 34, y: 14}, meta: {id: "pipe_3_1_1", description: "pipe_1"}, spec: {type: "gas", orientation: "vertical", height: 13}},
        //
        {position: {x: 37, y: 14}, meta: {id: "pipe_3_2", description: "pipe_2"}, spec: {type: "smoke", orientation: "vertical", height: 18}},
        {position: {x: 38, y: 20}, meta: {id: "pipe_3_3", description: "pipe_3"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 40, y: 20}, meta: {id: "pipe_3_4", description: "pipe_4"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 40, y: 21}, meta: {id: "pipe_3_5", description: "pipe_5"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        {position: {x: 43, y: 14}, meta: {id: "pipe_3_6", description: "pipe_6"}, spec: {type: "water", orientation: "vertical", height: 14}},
        {position: {x: 44, y: 20}, meta: {id: "pipe_3_7", description: "pipe_7"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 46, y: 20}, meta: {id: "pipe_3_8", description: "pipe_8"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 46, y: 21}, meta: {id: "pipe_3_9", description: "pipe_9"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        //
        {position: {x: 50, y: 14}, meta: {id: "pipe_4_1_1", description: "pipe_1"}, spec: {type: "gas", orientation: "vertical", height: 12}},
        {position: {x: 50, y: 26}, meta: {id: "pipe_4_1_2", description: "pipe_1"}, spec: {type: "gas", orientation: "TL"}},
        {position: {x: 50, y: 26}, meta: {id: "pipe_4_1_3", description: "pipe_1"}, spec: {type: "gas", orientation: "horizontal", width: -47}},
        //
        {position: {x: 53, y: 14}, meta: {id: "pipe_4_2_1", description: "pipe_2"}, spec: {type: "smoke", orientation: "vertical", height: 18}},
        {position: {x: 53, y: 32}, meta: {id: "pipe_4_2_2", description: "pipe_2"}, spec: {type: "smoke", orientation: "TL"}},
        {position: {x: 53, y: 32}, meta: {id: "pipe_4_2_3", description: "pipe_2"}, spec: {type: "smoke", orientation: "horizontal", width: -47}},
        {position: {x: 33, y: 33}, meta: {id: "pipe_4_2_4", description: "pipe_2"}, spec: {type: "smoke", orientation: "vertical", height: 2}},
        //
        {position: {x: 54, y: 20}, meta: {id: "pipe_4_3", description: "pipe_3"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 56, y: 20}, meta: {id: "pipe_4_4", description: "pipe_4"}, spec: {type: "steam", orientation: "BL"}},
        {position: {x: 56, y: 21}, meta: {id: "pipe_4_5", description: "pipe_5"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        //
        {position: {x: 59, y: 14}, meta: {id: "pipe_4_6_1", description: "pipe_6"}, spec: {type: "water", orientation: "vertical", height: 14}},
        {position: {x: 59, y: 28}, meta: {id: "pipe_4_6_2", description: "pipe_6"}, spec: {type: "water", orientation: "TL"}},
        {position: {x: 59, y: 28}, meta: {id: "pipe_4_6_3", description: "pipe_6"}, spec: {type: "water", orientation: "horizontal", width: -47}},
        //
        {position: {x: 60, y: 20}, meta: {id: "pipe_4_7", description: "pipe_7"}, spec: {type: "steam", orientation: "horizontal", width: 2}},
        {position: {x: 62, y: 20}, meta: {id: "pipe_4_8", description: "pipe_8"}, spec: {type: "steam", orientation: "BL"}},
        //
        {position: {x: 62, y: 21}, meta: {id: "pipe_4_9_1", description: "pipe_9"}, spec: {type: "steam", orientation: "vertical", height: 9}},
        {position: {x: 62, y: 30}, meta: {id: "pipe_4_9_2", description: "pipe_9"}, spec: {type: "steam", orientation: "TL"}},
        {position: {x: 62, y: 30}, meta: {id: "pipe_4_9_3", description: "pipe_9"}, spec: {type: "steam", orientation: "horizontal", width: -53}},
        {position: {x: 17, y: 31}, meta: {id: "pipe_4_9_4", description: "pipe_9"}, spec: {type: "steam", orientation: "vertical", height: 4}},
      ],
    },
    tanks: {
      tankItems: [
        {position: {x: 2, y: 2}, meta: {id: "tank_1", description: "water boiler"}, spec: {type: "native", radius: 5}},//tank 1
        {position: {x: 18, y: 2}, meta: {id: "tank_2", description: "water boiler"}, spec: {type: "native", radius: 5}},//tank 2
        {position: {x: 34, y: 2}, meta: {id: "tank_3", description: "water boiler"}, spec: {type: "native", radius: 5}},//tank 3
        {position: {x: 50, y: 2}, meta: {id: "tank_4", description: "water boiler"}, spec: {type: "native", radius: 5}},//tank 3
      ],
    },
    informationFields: {
      informationFieldsItems: [
        {position: {x: 3, y: 11}, meta: {id: "tank_1_info_1", description: "Level"}, spec: {signalId: "tank_1_level"}},
        {position: {x: 3, y: 9}, meta: {id: "tank_1_info_2", description: "Temperature"}, spec: {signalId: "tank_1_temp"}},
        {position: {x: 19, y: 11}, meta: {id: "tank_2_info_1", description: "Level"}, spec: {signalId: "tank_2_level"}},
        {position: {x: 19, y: 9}, meta: {id: "tank_2_info_2", description: "Temperature"}, spec: {signalId: "tank_2_temp"}},
        {position: {x: 35, y: 11}, meta: {id: "tank_3_info_1", description: "Level"}, spec: {signalId: "tank_3_level"}},
        {position: {x: 35, y: 9}, meta: {id: "tank_3_info_2", description: "Temperature"}, spec: {signalId: "tank_3_temp"}},
        {position: {x: 51, y: 11}, meta: {id: "tank_4_info_1", description: "Level"}, spec: {signalId: "tank_4_level"}},
        {position: {x: 51, y: 9}, meta: {id: "tank_4_info_2", description: "Temperature"}, spec: {signalId: "tank_4_temp"}},
      ],
    },
    informationBlocks: {
      informationBlockItems: [
        {position: {x: 2, y: 34}, meta: {id: "information_1", description: "lol"}, spec: {width: 6, height: 2, text: "на насосную"}},
        {position: {x: 15, y: 34}, meta: {id: "information_2", description: "lol"}, spec: {width: 6, height: 2, text: "от насосной"}},
        {position: {x: 30, y: 34}, meta: {id: "information_3", description: "lol"}, spec: {width: 7, height: 2, text: "от площадки ПК"}},
      ],
    }
  },
}
const changeSprite = (spriteId: string, state: Sprites, payload: HmiSprite): Sprites => {
  const mapper = <T>(it: HmiSprite<T>): HmiSprite<T> => {
    if (it.meta.id === payload.meta.id) {
      // @ts-ignore
      return payload;
    }
    return it;
  }
  return ({
    pipes: {
      ...state.pipes,
      pipeItems: [...state.pipes.pipeItems.map(it => mapper<PipeSpec>(it))],
    },
    informationFields: {
      ...state.informationFields,
      informationFieldsItems: [...state.informationFields.informationFieldsItems.map(it => mapper<InformationFieldSpec>(it))],
    },
    informationBlocks: {
      ...state.informationBlocks,
      informationBlockItems: [...state.informationBlocks.informationBlockItems.map(it => mapper<InformationBlockSpec>(it))],
    },
    valves: {
      ...state.valves,
      valveItems: [...state.valves.valveItems.map(it => mapper<ValveSpec>(it))],
    },
    tanks: {
      ...state.tanks,
      tankItems: [...state.tanks.tankItems.map(it => mapper<TankSpec>(it))],
    },
  });
};
const screenReducer = (state: ScreenState = initState, action: ScreenActionTypes): ScreenState => {
  switch (action.type) {
    case UPDATE_SCREEN_RESOLUTION:
      return ({
        ...state,
        resolution: action.payload,
      });
    case UPDATE_SCREEN_SPRITES:
      return ({
        ...state,
        sprites: action.payload,
      });
    case UPDATE_SCREEN_SINGLE_SPRITE:
      return ({
        ...state,
        sprites: {...changeSprite(action.spriteId, state.sprites, action.payload)},
      });
    default:
      return state;
  }
}

export default screenReducer;

//AC
export const updateScreenResolution = (newResolution: Resolution): UpdateScreenResolutionAction => ({
  type: UPDATE_SCREEN_RESOLUTION,
  payload: newResolution
});
export const updateScreenSprites = (sprites: Sprites): UpdateScreenSpritesAction => ({
  type: UPDATE_SCREEN_SPRITES,
  payload: sprites,
});
export const updateScreenSingleSprite = (spriteId: HmiSprite["meta"]["id"], newSprite: HmiSprite): UpdateScreenSingleSpriteAction => ({
  type: UPDATE_SCREEN_SINGLE_SPRITE,
  payload: newSprite,
  spriteId,
});
