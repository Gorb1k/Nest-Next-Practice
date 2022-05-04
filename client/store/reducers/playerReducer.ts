import {PlayerAction, PlayerActionTypes, PlayerState} from "../../types/player";
import {Action} from "redux";
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";


const initialState:PlayerState = {
    currentTime:0,
    duration:0,
    active:null,
    volume:50,
    pause: true
}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
    switch (action.type) {
        case PlayerActionTypes.PLAY:
            return {...state, pause: false}
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration:0, currentTime:0}

        default:
            return state
    }
}

// export const playerSlice = createSlice({
//     name: 'player',
//     initialState,
//     reducers: {
//         playTrack: (state, action) => {
//             state.pause = false
//         },
//         pauseTrack: (state, action) => {
//             state.pause = true
//         },
//         setDuration: (state, action) => {
//             state.duration = action.payload
//         },
//         setCurrentTime: (state, action) => {
//             state.currentTime = action.payload
//         },
//         setVolume: (state, action) => {
//             state.volume = action.payload
//         },
//         setActive: (state, action) => {
//             state.active = action.payload
//         }
//     }
// })