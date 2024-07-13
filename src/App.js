
import './App.css';
import Body from './component/Body';
import Body1 from './component/Body1';
import Body2 from './component/Body2';

function ChildComp(){
  return <div>ChildComp</div>
}

function App() {

  const props = {
    name : "송하성",
    age : "23",
    favorList : ["Java", "FrontEnd", "DB"],
  };
  
  return (
    <div className='App'>
      <div className='AppBody'>
      <Body {...props}> <ChildComp />
      </Body>
      <Body1/>
      <Body2/>
      </div>
    </div>
  );
}

export default App;
