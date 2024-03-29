import {legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) =>{
   switch(action.type){
        case addToDo.type : 
            return [...state,{'text':action.payload, 'id' :  String(Date.now())}];
        case deleteToDo.type : 
            return state.filter(toDo => toDo.id !== action.payload);
        default: return state;       
    }
};

const store = legacy_createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};
export default store;