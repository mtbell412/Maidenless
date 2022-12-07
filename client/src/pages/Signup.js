import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Create a Username</Form.Label>
        <Form.Control type="text" placeholder="New Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create a Password</Form.Label>
        <Form.Control type="password" placeholder="New Password" />
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

export default SignUp;