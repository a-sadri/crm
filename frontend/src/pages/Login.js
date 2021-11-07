import { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import './login.css';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill up all the forms!'); //TODO Use Toast or sweetalert
      //TODO Call api to submit the form
    }
  };

  return (
    <div className='entry-page bg-info'>
      <Container>
        <Row>
          <Col className='form-login'>
            <Card className='form-login-card'>
              <Card.Body>
                <Card.Title className='text-center'>
                  <h2>Client Login</h2>
                </Card.Title>
                <Form onSubmit={submitHandler}>
                  <Form.Group className='my-3'>
                    <Form.Control
                      valuue={email}
                      onChange={onChangeHandler}
                      type='email'
                      name='email'
                      placeholder='Email'
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      value={password}
                      onChange={onChangeHandler}
                      type='password'
                      name='password'
                      placeholder='Password'
                      required
                    />
                  </Form.Group>
                  <Button type='submit' className='my-3'>
                    Login
                  </Button>
                </Form>
                <Card.Text>
                  <a href='#'>Forgot Password?</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Entry;
