import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../components/TicketTable';
import tickets from '../assets/data/dummy-tickets.json';
import PageBreadcrumb from '../components/PageBreadcrumb';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='dashboard' />
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <Button
            variant='info'
            style={{
              color: 'white',
              fontSize: '1.5rem',
              padding: '10px 20px',
            }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total tickets: 20</div>
          <div>Pending tickets: 12</div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-2'>Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className='recent-tickets'>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
