// import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
// import {Action, AnyAction, applyMiddleware, createStore} from "redux";
// import {reducer, RootState} from "./reducers";
// import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
//
// const store = createStore(reducer, applyMiddleware(thunk))
//
// // create a makeStore function
// const makeStore: MakeStore<typeof store> = (context: Context) => store
// export type AppStore = ReturnType<typeof makeStore>
// export type AppState = ReturnType<AppStore['getState']>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
//
// // export an assembled wrapper
// export const wrapper = createWrapper<AppStore>(makeStore);
//
//
// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

// ----------------------------------------------------------------------------

import {configureStore, ThunkAction} from "@reduxjs/toolkit";
import {reducer} from "./reducers";
import {Action} from "redux";
import {createWrapper} from "next-redux-wrapper";


const makeStore = () => configureStore({reducer})
export type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;

export const wrapper = createWrapper<Store>(makeStore, { debug: true });