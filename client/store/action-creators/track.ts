import {ITrack, TrackAction, TrackActionsTypes} from "../../types/track";
import {Dispatch} from "react";
import axios from "axios";


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/track')
            dispatch(setUpTracks(response.data))
        }catch (e) {
            dispatch(setUpAnError('Произошла ошибка при загрузке трека'))
        }
    }
}
export const searchTrack = (query:string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/track/search?query='+query)
            dispatch(setUpTracks(response.data))
        }catch (e) {
            dispatch(setUpAnError('Произошла ошибка при загрузке трека'))
        }
    }
}


const setUpAnError = (payload: string):TrackAction => {
    return {type: TrackActionsTypes.FETCH_TRACKS_ERROR, payload}
}
const setUpTracks = (payload: ITrack[]):TrackAction => {
    return {type: TrackActionsTypes.FETCH_TRACKS, payload}
}
