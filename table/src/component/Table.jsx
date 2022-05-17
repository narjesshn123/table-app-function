import { Student } from "./Student"
export const Table = ({users, setUsers, setUser})=>{
    const handleDelete = (id)=>{
        setUsers(users.filter(user=>user.id !== id))
    }
    return(
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>job</td>
                </tr>
            </thead>
            <tbody>
                {users.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.job}</td>
                        <td>
                            <button onClick={()=>{setUser(item)}}>update</button>
                            <button onClick={()=>handleDelete(item.id)}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )}