import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Create a Username</Form.Label>
        <Form.Control onChange={handleChange} name='username' value={formState.username} type="text" placeholder="New Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} name='email' value={formState.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create a Password</Form.Label>
        <Form.Control onChange={handleChange} name='password' value={formState.password} type="password" placeholder="New Password" />
        <Form.Text className="text-muted">
          Your password should include...
        </Form.Text>
      </Form.Group>

      <Button variant="dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
  }

export default Signup;