import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({toDos}){
    const {id} = useParams(); 
    const selectedToDo = toDos.find(toDo => toDo.id === id);
    return (
        <>
            <h1>{selectedToDo?.text}</h1>
            <h5>Created at: {selectedToDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state,ownProps){
    console.log(ownProps);
    return {toDos:state};
}

export default connect(mapStateToProps)(Detail);

//redux local storage