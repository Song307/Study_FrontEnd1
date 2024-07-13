import { useState } from 'react';
import '../App.css';

function Viewer({ number }){
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>} </div>;
}
function Body2(){
    const [number, setNumber] = useState(0);
    const onIncrease =()=>{
        setNumber(number + 1);
    }
    const onDecrease =()=>{
        setNumber(number - 1);
    }
    
    return(
        <div className='bodyCss'>
            <h1>Body2</h1>
            <p>짝수 홀수 판별하기</p>
            <h2>{number}</h2>
            <Viewer number={number}/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Body2;