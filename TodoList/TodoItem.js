import './App1.css';

function TodoItem(){

    return(
        <div className='TodoItem'>
            <div className='checkbox_col'> <input type='checkbox'/> </div>
            <div className='title_col'>할 일</div>
            <div className='data_col'>{new Date().toLocaleDateString()}</div>
            <button className='btn_col'>삭제</button>
        </div>
    )
}

export default TodoItem;