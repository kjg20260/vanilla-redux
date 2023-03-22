import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import {actionCreators} from '../store';

function Home({toDos, addToDo, deleteToDo}){
    const [text,setText] = useState('');
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        if(text !== ''){
            setText('');
            addToDo(text);
        }
    }
    return (<>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>추가</button>
        </form>
        <ul>
            {toDos.map(toDo =><ToDo {...toDo} key={toDo.id}></ToDo>)}
        </ul>
    </>)
}

function mapStateToProps(state,ownProps){
    return {toDos:state};
}


function mapDispatchToProps(dispatch,ownProps){
    return {
        addToDo : text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);