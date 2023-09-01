import logo from './logo.svg';
import './App.css';
import Header from './com/Header';
import Footer from './com/Footer';
import Todo from './Todo';
import TodoItem from './com/TodoItem';
// Header

function App() {
  const Dlt =()=>{
console.log("hi");
  }
  let ArrToObj=[
    {
    no:1,
    name:"Faiz",
    title:" Hello I am First Todo"
  },
  {
    no:2,
    name:"Atta",
    title:"HI I am Second Todo"
  },
  {
    no:3,
    name:"Junaid",
    title:"HI I am Third Todo"
  },
  {
    no:4,
    name:"Hello World",
    title:"HI I am Fourth Todo"
  },
]
  return (
    <div>
  <Header title="Code With Faiz" find={true}/>
   <Todo ArrToObj={ArrToObj} Dlt={Dlt}/>
   {/* <TodoItem/> */}
  <Footer />
    </div>
  );
}

export default App;
