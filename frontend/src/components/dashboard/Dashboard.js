import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import Login from "../login/Login";
import "./dashboard.css"



const Dashboard = () => {

    const {http,getToken} = AuthUser();

    const [users, setUsers] = useState([]);
    
    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }
    useEffect(()=>{
        fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
// console.log(user)
    return (
        <>
               {getToken()? 
               <>
            <table className="table">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Name</th>
                        <th className="email-th">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> 
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-action btn-info" to={{ pathname: "/edit/" + user.id }}><span>Edit</span></Link>&nbsp;
                                <button type="button" className="btn-action btn btn-danger"
                                    onClick={()=>{deleteUser(user.id )}}
                                    ><span>Delete</span></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> </> :<Login/>}
        </> 

    )
}
export default Dashboard