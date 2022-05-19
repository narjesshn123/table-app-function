import {Children, useState } from 'react';
import { Form } from './Form'
import './Table.css'
export const Table = ({users, setUsers, setUser, user})=>{
    const[showInfo, setShowInfo] = useState(false)

    const handleDelete = (id)=>{
        setUsers(users.filter(user => user.id !== id))
    }
    return(
        <>
        <nav>
        <table className='table'>
            <thead>
                <tr>
                    <td>id</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>job</td>
                    <td className="plus">
                        <button onClick={()=>{setShowInfo(!showInfo)}} type='radio'>
                            {showInfo ? "-":  "+"}
                       
                            </button>
                            
                    </td>
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
                            <button onClick={()=>{setUser(item); setShowInfo(!showInfo)}}>
                             
                                update</button>
                            <button onClick={()=>handleDelete(item.id)}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
       </table>
        </nav>
        <h1>
                 {(showInfo) &&
            (<Form user={user} setUser={setUser} users={users} setUsers={setUsers}>{Children}</Form>)}
        
        </h1>
        </>

    )}