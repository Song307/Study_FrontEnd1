import './App1.css';
import TodoItem from './TodoItem';

function TodoList(){

    return(
        <div className='TodoList'>
            <hr/>
            <h4>Todo List 📱</h4>
            <input className='searchbar' placeholder="검색어 입력"/>
            <div className='list_wrapper'>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    )
}

export default TodoList;