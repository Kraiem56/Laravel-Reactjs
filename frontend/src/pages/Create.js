import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import AuthUser from '../components/AuthUser';
import "../App.css"

const  Create = () => {
  const {http,getToken}=AuthUser()
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});

    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/users',inputs).then((res)=>{
            navigate('/dashboard');
            handleClose()
        })
        setTimeout(() => {
          document.location.reload();
        }, 1000);
    }
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
           {getToken() && ( <>
      <Button variant="primary" onClick={handleShow} className="btn-create">
        <span className='span'>Add a new User</span>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <h2>New User</h2> */}
            <div className="row">
                        <label>Name</label>
                        <input required type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />
                        <label>Email</label>
                        <input required type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input required type="password" name="password" className="form-control mb-2"
                            value={inputs.password || ''}
                            onChange={handleChange}
                             />
                        {/* <button type="button" className="btn btn-info mt-2"></button> */}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={submitForm} >
          Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>)}
        </div>

    )
}
export default Create