import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';



const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };
  return (

    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} name="email" value={formState.email} type="text" placeholder="Your Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} name="password" value={formState.password} type="password" placeholder="Your Password" />
      </Form.Group>

      <Button variant="dark" type="submit">
        Log In
      </Button>
    </Form>
  );
}
export default Login;