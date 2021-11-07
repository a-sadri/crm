import { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import './login.css';

const Entry = () => {
  const [email, setEmail] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setEmail(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Please enter the email'); //TODO Use Toast or sweetalert
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
                  <h2>Reset Password</h2>
                </Card.Title>
                <Form onSubmit={submitHandler}>
                  <Form.Group className='my-3'>
                    <Form.Control
                      valuue={email}
                      onChange={onChangeHandler}
                      type='email'
                      name='email'
                      placeholder='Email'
                    />
                  </Form.Group>
                  <Button type='submit' className='my-3'>
                    Reset Password
                  </Button>
                </Form>
                <Card.Text>
                  <a href='#'>Login Again?</a>
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
