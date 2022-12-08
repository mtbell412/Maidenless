import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// This function was taken from https://react-bootstrap.github.io/forms/validation/, which allows validation to happen 
function LogInForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    //noValidate is used because "browsers provide their own validation UI by default on <Form>"
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Your Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Your Password" />
      </Form.Group>

      <Button variant="dark" type="submit">
        Log In
      </Button>
    </Form>
  );
}
render (<LogInForm/>);
export default LogInForm;