import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const [accepted, setAccepted] = useState(false)
  const {createUser} = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo)

    createUser(email, password, name)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
      userProfile(result.user, name)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const userProfile = (auth, name) => {
    updateProfile(auth, {
      displayName: name
    })
    .then(retult => {

    })
    .catch(error => {

    })
  }

  const handleAccepted = (event) => {
    setAccepted(event.target.checked)
  }

    return (
        <Container className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleAccepted}
          type="checkbox"
          name="accept" 
          label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
      <Button disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
      <br /><br />
      <Form.Text className="text-secondary">
      Already have an account?
          <Link to='/login'> Login</Link>
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

export default Register;