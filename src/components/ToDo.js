import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {actionCreators} from '../store';

function ToDo({text,onBtnClick,id}){
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>삭제</button>
        </li>
    );
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
};
export default connect(null,mapDispatchToProps)(ToDo);