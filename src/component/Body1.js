import { useState } from 'react';
import '../App.css';

function Body1(){
    const [state, setState] = useState({
        name : "",
        gender : "",
        birth : "",
        bio : "",
    })
    const handleOnChange = (e) => {
        console.log("현재 수정 대상:", e.target.name);
        console.log("수정값 : ", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div className='bodyCss'>
            <h1>Body1</h1>
            <p>setState 여러개의 사용자 입력 관리하기</p>
            <input name='name' value={state.name} onChange={handleOnChange} placeholder='이름'></input> <br/>
            <input name='birth' value={state.birth} onChange={handleOnChange} type='date'></input>
            <select name="gender" value={state.gender} onChange={handleOnChange}>
                <option key={"남성"}>남성</option>
                <option key={"여성"}>여성</option>
            </select> <br/>
            <textarea name='bio' value={state.bio} onChange={handleOnChange} placeholder='메모를 입력하시오'/>
            <p>
                <b>이름 :</b> {state.name} <br/> 
                <b>성별 : </b> {state.gender} <br/> 
                <b>생일 :</b> {state.birth}
                </p>

        </div>

    )

}


export default Body1;