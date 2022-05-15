import { useState } from "react";
import { Student } from "./Student";


const Table = ()=>{
    const [users, setUsers] = useState(Student)
  
    const handleAdd = (e)=>{
        e.preventDefault()      
        const data = new FormData(e.target)
        const name = data.get("name")
        const lastName = data.get("lastName")
        const job = data.get("job")
        setUsers([...users, {id:Math.floor(Math.random()*20),name, lastName, job}])
    }
    const handleDelete = (id)=>{
        setUsers(users.filter((user)=>user.id !== id))
    }

    const handleUpdate = (oldUser)=>{
        const data = new FormData()
        const name = data.get("name")
        const lastName = data.get("lastName")
        const job = data.get("job") 
        setUsers(...users, users.map((user)=>
        user.id === oldUser.id ?
        { name, lastName, job}
        :user))
      }
    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>lastName</td>
                    <td>job</td>
                </tr>
            </thead>
            <tbody>
         {users.map((user)=>(
             <tr key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.lastName}</td>
                 <td>{user.job}</td>
                 <td>
                     <button onClick={()=>handleUpdate(user)}>update</button>
                     <button onClick={()=>handleDelete(user.id)}>delete</button>
                 </td>
             </tr>
         ))}
            </tbody>
        </table>
        <form onSubmit={handleAdd}>
        <label htmlFor="name">name:</label>
            <input id={"name"} type="text" name="name"></input>
            <label htmlFor="lastName">lastNme:</label>
            <input id={"lastName"} type="text" name="lastName"></input>
            <label htmlFor="job">job:</label>
            <input id={"job"} type="text" name="job"></input>
            <input type={"submit"}/>
        </form>
        </>
    )
}
export default Table