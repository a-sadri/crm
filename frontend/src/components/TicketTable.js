import { Table } from 'react-bootstrap';

const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.subject}</td>
              <td>{item.status}</td>
              <td>{item.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' className='text-center'>
              There is no ticket
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
