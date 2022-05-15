import { useState } from "react";
// import { Student } from "./Student";
const Student = [
    {id:1, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:2, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:3, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:4, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:5, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:6, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:7, name:"narjes", lastName:"sheikhali", job:"daveloper"},
    {id:8, name:"narjes", lastName:"sheikhali", job:"daveloper"},
]

const Table = ()=>{
    const [users, setUsers] = useState(Student)
  
    const handleAdd = (e)=>{
        e.preventDefault()      
        const data = new FormData(e.target)
        const name = data.get("name")
        const lastName = data.get("lastName")
        const job = data.get("job")
        setUsers([...users, {id:23,name, lastName, job}])
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
                     <button>update</button>
                     <button>delete</button>
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