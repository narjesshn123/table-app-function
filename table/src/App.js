import {Children, useState} from 'react';      
import {Student} from './component/Student';            
import {Table} from "./component/Table";  

import './App.css';
function App() {
const[users, setUsers] = useState(Student)
const [user, setUser] = useState({firstName:"", lastName:"", job:""})

  return (
    <div className="App">
   <Table users={users} setUsers={setUsers} user={user} setUser={setUser}/>

    </div>
  );
}

export default App;
