import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageBreadcrumb from '../components/PageBreadcrumb';

const initialForm = {
  subject: '',
  issueDate: '',
  detail: '',
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {}, [formData]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='New Ticket' />
        </Col>
      </Row>
      <Row className='mt-5'>
        <h1 className='text-info'>Add New Ticket</h1>
        <Col>
          <Form autoComplete='off' onSubmit={submitHandler}>
            <Form.Group as={Row} className='my-3'>
              <Form.Label column sm={3}>
                Subject
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={onChangeHandler}
                  type='text'
                  minLength='5'
                  name='subject'
                  value={formData.subject}
                  placeholder='Subject'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Issue Found
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={onChangeHandler}
                  type='date'
                  name='issueDate'
                  value={formData.issueDate}
                  placeholder='Date'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mt-3'>
              <Form.Label column sm={3}>
                Detailes
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as='textarea'
                  onChange={onChangeHandler}
                  name='detail'
                  value={formData.detail}
                  rows='5'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={9}>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-grid'>
                  <Button type='submit' className='my-3 ' variant='info'>
                    Add Ticket
                  </Button>
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
