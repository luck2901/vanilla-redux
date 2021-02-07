import React from "react";
import {connect} from "react-redux";

function Detail({toDo}){    
    return (
        <>
        <h1>{toDo?.text}</h1>
        <h5>Created at : {toDo?.id}</h5>
        </>
    ); //새로고침할 때 id로 추가했떤 Todo가 존재하지 않게 되기에 ?를 붙여주어 해결
}

function mapStateToProps(state,ownProps){
    const {match:{params:{id}}}= ownProps;
    return {toDo:state.find(toDo=>toDo.id===parseInt(id))} //testing function에 만족하는 첫번째 요소만 반환.
}

export default connect(mapStateToProps)(Detail);