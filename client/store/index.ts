import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer} from "./reducers";

const store = createStore(reducer)
// create a makeStore function
const makeStore: MakeStore<typeof store> = (context: Context) => store

// export an assembled wrapper
export const wrapper = createWrapper<typeof store>(makeStore, {debug: true});