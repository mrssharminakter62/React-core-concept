import logo from './logo.svg';
import './App.css';
import { getSuggestedQuery } from '@testing-library/react';
import { useEffect, useState } from 'react';

function App() {
  const megaFriend = {
    name:'Sabia',
    age: 25,
    mobile:2322425,
    job: 'facebooking'
  }
  return (
    <div className="App">
      <header className="App-header">
     <Counter></Counter>
     <Users></Users>
     <Person name = {megaFriend.name}  job= {megaFriend.job} ></Person>
     <Person name = {megaFriend.name}  job= {megaFriend.job} ></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove ={ ()=> setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

function Person(props){
 const personStyle ={
   color: "red",
   border:'5px solid grey',
   fontSize:'30px'
 }
  return(
    <div style={personStyle}>
      <h1>My friend: {props.name}</h1>
      <h3>Job: {props.job}</h3>
    </div>
  )
}
export default App;
