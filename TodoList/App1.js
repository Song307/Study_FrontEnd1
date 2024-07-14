import './App1.css';
import Header from './Header';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
function App1(){

    return(
        <div className='App1'>
            <Header/>
            <TodoEditor/>
            <TodoList/>
        </div>
    )

}

export default App1;