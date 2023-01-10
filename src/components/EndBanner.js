import WinDetailsContainer from './WinDetailsContainer';

export default function EndBanner({ attempts, results, closeHandler, isWin, puzzle }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#04042c',
        position: 'absolute',
        zIndex: 99,
      }}
    >
      <WinDetailsContainer
        attempts={attempts}
        results={results}
        closeHandler={closeHandler}
        isWin={isWin}
        puzzle={puzzle}
      />
    </div>
  );
}
