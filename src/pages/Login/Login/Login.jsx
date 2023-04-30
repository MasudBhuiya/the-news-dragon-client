import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const gone = location.state?.from?.pathname || '/category/0';
  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(gone, {replace: true})
    })
    .catch(error => console.log(error.message))

  }
    return (
        <Container className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br /><br />
      <Form.Text className="text-secondary">
      Dont have an account?
          <Link to='/register'> Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;