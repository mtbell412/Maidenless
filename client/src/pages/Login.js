import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LogIn() {
  return (
    <Form>
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

export default LogIn;