// import {legacy_createStore } from "redux";

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const reducer = (state = [], action) =>{
//    console.log(state);
//    switch(action.type){
//         case ADD_TODO : 
//             return [...state,{'text':action.text, 'id' :  String(Date.now())}];
//         case DELETE_TODO : 
//             return state.filter(toDo => toDo.id !== action.id);
//         default: return state;       
//     }
// };
// const store = legacy_createStore(reducer);

// const addToDo = text => {
//     return {
//         type:ADD_TODO,
//         text
//     };
// }
// const deleteToDo = id => {
//     return {
//         type:DELETE_TODO,
//         id
//     };
// }

// const dispatchAddToDo = text => {
//     store.dispatch(addToDo(text));
// }

// const dispatchDeleteToDo =  e => {
//     const id = e.target.parentNode.id;
//     store.dispatch(deleteToDo(id));
// }

// const paintTodo = () => {
//     console.log(store.getState());
//     ul.innerHTML = '';
//     const toDos = store.getState();
//     toDos.forEach(toDo => {
//         const li = document.createElement('li');
//         const btn = document.createElement('button');
//         btn.innerText = '삭제';
//         btn.addEventListener('click',dispatchDeleteToDo);
//         li.id = toDo.id;
//         li.innerText = toDo.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// }
// store.subscribe(paintTodo);
// const onSubmit = e => {
//     e.preventDefault();
//     const text = input.value;
//     input.value = '';
//     dispatchAddToDo(text);
// }

// form.addEventListener('submit',onSubmit);
// //vanilla redux


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}> 
        <App/>
    </Provider>,
    document.getElementById('root')
);