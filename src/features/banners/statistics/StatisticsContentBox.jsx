import { Col } from 'react-bootstrap';

export default function StatisticsContentBox({ number, text }) {
  return (
    <Col className='text-center'>
      <span className='fs-2'>{number}</span>
      <br />
      <span>{text}</span>
    </Col>
  );
}
