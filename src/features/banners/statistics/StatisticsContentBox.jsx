export default function StatisticsContentBox({ number, text }) {
  return (
    <div className='text-center'>
      <span className='fs-2'>{number}</span>
      <br />
      <span>{text}</span>
    </div>
  );
}
