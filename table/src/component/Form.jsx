
export const Form = ({users, setUsers, user, setUser})=>{
    const handleAdd = (e)=>{
        e.preventDefault()
        if(user.id){
            setUsers(users.map(oldUser =>  user.id === oldUser.id ? user : oldUser))
            
        } else{   
        setUsers([...users, {id:3, ...user}])
        setUser({firstName:"", lastName:"", job:""})
      }}
 
    const handleChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.value})
    }
    return(
        <>
        <form onSubmit={handleAdd}>
            <label htmlFor="firstName">first name</label>
            <input id="firstName" type={"text"} onChange={handleChange} name={"firstName"} value={user.firstName}></input>
            <label htmlFor="lastName">last name</label>
            <input id="lastName" type={"text"} onChange={handleChange} name={"lastName"} value={user.lastName}></input>
            <label htmlFor="job">job</label>
            <input id="job" type={"text"} onChange={handleChange} name={"job"} value={user.job}></input>
            <input type={"submit"}></input>
        </form>
        </>
    )
}