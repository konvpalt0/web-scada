import {
  HmiSprite, InformationFieldSpec, PipeSpec,
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
        {position: {x: 51, y: 35}, meta: {id: "0", description: "gas valve"}, spec: {status: "MOVING"}},//gas valve
        {position: {x: 47, y: 13}, meta: {id: "1", description: "steam valve"}, spec: {status: "OPEN"}},//steam valve
        {position: {x: 42, y: 3}, meta: {id: "2", description: "water valve"}, spec: {status: "CLOSE"}},//water valve
      ],
    },
    pipes: {
      pipesColor: {
        air: "#ffffff",
        gas: "#ffe13e",
        oil: "#373a36",
        steam: "#c7d5e0",
        water: "#00c7ff",
        smoke: "#738276",
      },
      pipeItems: [
        //anglePipes
        {position: {x: 37, y: 35}, meta: {id: "10", description: "gas"}, spec: {orientation: "TR", type: "gas"}},//gas
        {position: {x: 26, y: 35}, meta: {id: "11", description: "oxygen"}, spec: {orientation: "TL", type: "air"}},//air
        {position: {x: 26, y: 3}, meta: {id: "12", description: "co2"}, spec: {orientation: "BL", type: "smoke"}},//co2
        {position: {x: 33, y: 3}, meta: {id: "13", description: "water"}, spec: {orientation: "BR", type: "water"}},//water
        {position: {x: 36, y: 13}, meta: {id: "14", description: "steam"}, spec: {orientation: "BR", type: "steam"}},//steam
        //horizontalPipes
        {
          position: {x: 38, y: 35},
          meta: {id: "100", description: "gas"},
          spec: {orientation: "horizontal", width: 27, type: "gas"}
        },//gas
        {
          position: {x: 26, y: 35},
          meta: {id: "101", description: "oxygen"},
          spec: {orientation: "horizontal", width: -25, type: "air"}
        },//oxygen
        {
          position: {x: 26, y: 3},
          meta: {id: "102", description: "co2"},
          spec: {orientation: "horizontal", width: -25, type: "smoke"}
        },//co2
        {
          position: {x: 34, y: 3},
          meta: {id: "103", description: "water"},
          spec: {orientation: "horizontal", width: 31, type: "water"}
        },//water
        {
          position: {x: 37, y: 13},
          meta: {id: "104", description: "steam"},
          spec: {orientation: "horizontal", width: 28, type: "steam"}
        },//steam
        //verticalPipes
        {
          position: {x: 37, y: 35},
          meta: {id: "1001", description: "gas"},
          spec: {orientation: "vertical", height: -4, type: "gas"}
        },//gas
        {
          position: {x: 26, y: 35},
          meta: {id: "1002", description: "oxygen"},
          spec: {orientation: "vertical", height: -4, type: "air"}
        },//oxygen
        {
          position: {x: 26, y: 4},
          meta: {id: "1003", description: "co2"},
          spec: {orientation: "vertical", height: 24, type: "smoke"}
        },//co2
        {
          position: {x: 36, y: 14},
          meta: {id: "1004", description: "steam"},
          spec: {orientation: "vertical", height: 2, type: "steam"}
        },//steam
        {
          position: {x: 33, y: 4},
          meta: {id: "1005", description: "water"},
          spec: {orientation: "vertical", height: 14, type: "water"}
        },//water
        {
          position: {x: 32, y: 16},
          meta: {id: "1006", description: "boiler left"},
          spec: {orientation: "vertical", height: 8, type: "water"}
        },//boiler left
        {
          position: {x: 37, y: 16},
          meta: {id: "1007", description: "boiler right"},
          spec: {orientation: "vertical", height: 8, type: "water"}
        },//boiler right
      ],
    },
    tanks: {
      tankItems: [
        {
          position: {x: 35, y: 24},
          meta: {id: "99", description: "water boiler"},
          spec: {type: "boilerBottom", radius: 3}
        },//bottom water boiler
        {position: {x: 35, y: 16}, meta: {id: "98", description: "water boiler"}, spec: {type: "boilerTop", radius: 3}},//top water boiler
      ],
    },
    informationFields: {
      informationFieldsItems: [
        {position: {x: 54, y: 28}, meta: {id: "133000", description: "T gas"}, spec: {signalId: "10000"}},
        {position: {x: 54, y: 30}, meta: {id: "133001", description: "P gas"}, spec: {signalId: "10002"}},
        {position: {x: 54, y: 32}, meta: {id: "133002", description: "Q gas"}, spec: {signalId: "10004"}},
        {position: {x: 54, y: 15}, meta: {id: "133003", description: "T steam"}, spec: {signalId: "10006"}},
        {position: {x: 54, y: 17}, meta: {id: "133004", description: "P steam"}, spec: {signalId: "10008"}},
        {position: {x: 54, y: 19}, meta: {id: "133005", description: "Q steam"}, spec: {signalId: "10010"}},
        {position: {x: 54, y: 5}, meta: {id: "133006", description: "T water"}, spec: {signalId: "1"}},
        {position: {x: 54, y: 7}, meta: {id: "133007", description: "P water"}, spec: {signalId: "10014"}},
        {position: {x: 54, y: 9}, meta: {id: "133008", description: "Q water"}, spec: {signalId: "10016"}},
        {position: {x: 4, y: 5}, meta: {id: "133009", description: "RPM"}, spec: {signalId: "10018"}},
        {position: {x: 4, y: 7}, meta: {id: "133010", description: "T flue gas"}, spec: {signalId: "10020"}},
        {position: {x: 4, y: 32}, meta: {id: "133011", description: "RPM"}, spec: {signalId: "10022"}},
        {position: {x: 23, y: 29}, meta: {id: "133012", description: "Underpressure"}, spec: {signalId: "10024"}},
        {position: {x: 33, y: 29}, meta: {id: "133013", description: "Flame"}, spec: {signalId: "10026"}},
        {position: {x: 35, y: 10}, meta: {id: "133014", description: "Level"}, spec: {signalId: "10028"}},
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
