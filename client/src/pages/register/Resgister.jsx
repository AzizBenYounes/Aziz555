import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { register } from '../../JS/action/auth.action';
const Resgister = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "", 
    password: "",
    phone: "",
  })
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  };
  //console.log(newUser);
  const handleRegister = (e) => {
    e.preventDefault();
      dispatch(register(newUser));
  }
  return (
    <div className ="container">
      <h2>Create an Account</h2>
        <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" >
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" name="name" value={newUser.name} onChange={handleChange} />
      </Form.Group>
          <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="tel" placeholder="Phone" name="phone" value={newUser.phone} onChange={handleChange} />
      </Form.Group>
        <p>
          Already have an account?
        <span> <Link to={"/Login"}> Login</Link></span>  
          </p>
      <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
    </div>
  )
}

export default Resgister;
