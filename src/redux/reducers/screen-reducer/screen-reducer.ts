import {
    Resolution,
    ScreenActionTypes,
    ScreenState,
    UPDATE_SCREEN_RESOLUTION,
    UpdateScreenResolutionAction
} from "../types";

const initState: ScreenState = {
    resolution: {
        height: 480,
        width: 854,
    },
    sprites: {
        valves: [],
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
                //input pipes
                {id: "10", x: 1, y: 17, orientation: "horizontal", width: 10, type: "oil", description: "null"},
                {id: "11", x: 11, y: 10, orientation: "vertical", height: 15, type: "oil", description: "null"},
                {id: "12", x: 12, y: 9, orientation: "horizontal", width: 10, type: "oil", description: "null"},
                {id: "13", x: 12, y: 25, orientation: "horizontal", width: 10, type: "oil", description: "null"},
                {id: "14", x: 11, y: 9, orientation: "BR", type: "oil", description: "null"},
                {id: "15", x: 11, y: 25, orientation: "TR", type: "oil", description: "null"},

                //output oil pipe top separator
                {id: "50", x: 40, y: 9, orientation: "horizontal", width: 5, type: "oil", description: "null"},
                {id: "51", x: 45, y: 10, orientation: "vertical", height: 15, type: "oil", description: "null"},
                {id: "52", x: 45, y: 9, orientation: "BL", type: "oil", description: "null"},
                //output water pipe top separator
                {id: "50", x: 28, y: 10, orientation: "vertical", height: 5, type: "water", description: "null"},
                {id: "51", x: 29, y: 15, orientation: "horizontal", width: 10, type: "water", description: "null"},
                {id: "52", x: 28, y: 15, orientation: "TR", type: "water", description: "null"},
                //output gas pipe top separator
                {id: "60", x: 28, y: 9, orientation: "vertical", height: -5, type: "gas", description: "null"},
                {id: "61", x: 29, y: 3, orientation: "horizontal", width: 10, type: "gas", description: "null"},
                {id: "62", x: 28, y: 3, orientation: "BR", type: "gas", description: "null"},


                //output oil pipe top separator
                {id: "50", x: 40, y: 25, orientation: "horizontal", width: 5, type: "oil", description: "null"},
                {id: "52", x: 45, y: 25, orientation: "TL", type: "oil", description: "null"},
                //output water pipe bottom separator
                {id: "70", x: 28, y: 26, orientation: "vertical", height: 5, type: "water", description: "null"},
                {id: "71", x: 29, y: 31, orientation: "horizontal", width: 10, type: "water", description: "null"},
                {id: "72", x: 28, y: 31, orientation: "TR", type: "water", description: "null"},
                //output gas pipe top separator
                {id: "80", x: 28, y: 25, orientation: "vertical", height: -5, type: "gas", description: "null"},
                {id: "81", x: 29, y: 19, orientation: "horizontal", width: 10, type: "gas", description: "null"},
                {id: "82", x: 28, y: 19, orientation: "BR", type: "gas", description: "null"},
            ],
        },
        tanks: {
            tankItems: [],
        },
    },
}

const screenReducer = (state: ScreenState = initState, action: ScreenActionTypes): ScreenState => {
    switch (action.type) {
        case UPDATE_SCREEN_RESOLUTION:
            return ({
                ...state,
                resolution: action.payload,
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
