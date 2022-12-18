import { useState } from "react"
import { Form, Button } from "react-bootstrap";
import { useNavigate,Link } from 'react-router-dom';
import AuthUser from '../AuthUser';
import "./register.css"

export default function Register() {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
            http.post('/register',{email:email,password:password,name:name})
                .then((res)=>{
                navigate('/')
            })
    }

    return(
        <div className="login-page">
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <Form>
      <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
           
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="rows">
          <Button
            disabled={!password || !email || !name}
            className="Button"
            type="button"
            onClick={submitForm}
          >
            SIGN UP
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          You have an account? <Link to="/">LOGIN</Link>
        </div>
      </Form>
    </div>
    )
}