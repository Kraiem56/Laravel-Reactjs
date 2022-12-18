import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../components/AuthUser";


export default function Edit(props) {
    const {http,getToken}=AuthUser()

    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/dashboard');
        })
    }
    return (
        <div>
          {getToken() && (  <div className="row justify-content-center pt-5">
                <div className="col-sm-6">
            <h2>Edit User</h2>
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />
                        

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>)}
        </div>

    )
}