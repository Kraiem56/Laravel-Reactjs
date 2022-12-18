import { useState } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import { Form, Button } from "react-bootstrap";
import "./login.css";

export default function Login() {
  const { http, setToken } = AuthUser();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
    });
  };

  return (
    <div className="login-page">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form>
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
            disabled={!password || !email}
            className="Button"
            type="button"
            onClick={submitForm}
          >
            SIGN UP
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          You don't have an account? <Link to="/register">Create account</Link>
        </div>
      </Form>
    </div>
  );
}
