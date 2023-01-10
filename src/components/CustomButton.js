export default function CustomButton({ text, clickHandler }) {
  return (
    <span
      style={{
        position: 'absolute',
        right: '10px',
        top: '10px',
        fontWeight: 'bold',
        fontSize: '1.2rem',
      }}
      className='closeBannerBtn'
      onClick={() => clickHandler()}
    >
      {text}
    </span>
  );
}
