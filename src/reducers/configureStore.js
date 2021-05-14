import { createStore, combineReducers } from 'redux';

import cctv from "./cctv";

const reducer = combineReducers({
cctv,
});

export default createStore(reducer)
