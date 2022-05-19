import './Form.css';       
import { Table } from './Table'

export const Form = ({users, setUsers, user, setUser})=>{
    const numUniqe = ()=>{
        return parseInt(10000*Math.random())
    }
    const handleAdd = (e)=>{
        e.preventDefault()

        if(user.id){
            setUsers(users.map(oldUser =>  user.id === oldUser.id ? user : oldUser))
        } else{   
        setUsers([...users, {id:numUniqe(), ...user}])
        setUser({firstName:"", lastName:"", job:""})
       
      }
            setUser([{id:numUniqe(),firstName:"", lastName:"", job:""}])
    
    }
 
    const handleChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.value})
    }
    return(
        <>
        <form onSubmit={handleAdd}  className="form">
            <div>
            <label htmlFor="firstName">first name:</label>
            <input id="firstName" type={"text"} onChange={handleChange} name={"firstName"} value={user.firstName}></input>
            </div>
            <div>
            <label htmlFor="lastName">last name:</label>
            <input id="lastName" type={"text"} onChange={handleChange} name={"lastName"} value={user.lastName}></input>
            </div>
            <div>
            <label htmlFor="job">job:</label>
            <input id="job" type={"text"} onChange={handleChange} name={"job"} value={user.job}></input>
            </div>
            <input style={{    backgroundColor: '#04AA6D',
      border: 'none',
      color: 'white',
      padding: '16px 32px',
      textDecoration: 'none',
      margin: '4px 2px',
      cursor: 'pointer'}} type={"submit"}></input>
        </form>
        </>
    )
}