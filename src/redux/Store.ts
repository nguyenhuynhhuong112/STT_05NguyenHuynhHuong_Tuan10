import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import { TodoReducer } from "./Reducer";

export const store = configureStore({
    reducer:combineReducers({
        todo:TodoReducer
    }),
    devTools:{name:'todolist'}
})