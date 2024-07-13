import { useState } from 'react';
import '../App.css';

function Body({name, age, favorList, children}){
    ////////////////button 폼 입력//////////////////
    const [count, setCount] = useState(0);
    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => { 
        setCount(count - 1);
    }

    ////////////////Input 폼 입력///////////////////
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const [date, setDate] = useState("");
    function dateHandle(e){
        setDate(e.target.value);
    }
    //////////////드롭다운 상자(select)/////////////
    const [select, setSelect] = useState("");
    const selectHendle = (e) => {
        console.log("변경된 값: ", e.target.value);
        setSelect(e.target.value);
    }
    //////////////글상자 (textArea)/////////////////
    const [textArea, setTextArea] = useState("");
    const textAreaHandleChange =(e) => {
        setTextArea(e.target.value);
    }
    
    return(
        <div className='bodyCss'>
            <h1>Body</h1>
            <p>Props를 통해 부모-자식 컴포넌트에 값 전달</p>
            <h3>{name}은 {age}살.  코딩언어 {favorList.length}개를 선호. {children}</h3>
            
            <hr/>
            BUTTON INPUT
            <h3>{count}</h3>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <hr/>

            TEXT INPUT <input value={text} onChange={handleChange}/><br/>
            DATE INPUT <input value={date} onChange={dateHandle} type='date'></input>
            <h3>{text}  <br/>  {date}</h3>
            Select INPUT <select value={select} onChange={selectHendle}>
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>2번</option>
            </select>
            <h3>{select}</h3>
            <hr/>
            <textarea value={textArea} onChange={textAreaHandleChange}/>
            <h3>{textArea}</h3>


        </div>
    )
}

export default Body;