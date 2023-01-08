import WinDetailsContainer from './WinDetailsContainer';

export default function EndBanner({ attempts, results, closeHandler }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#04042c',
        position: 'absolute',
      }}
    >
      <WinDetailsContainer attempts={attempts} results={results} closeHandler={closeHandler} />
    </div>
  );
}
