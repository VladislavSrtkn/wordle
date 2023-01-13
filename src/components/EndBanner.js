import GameDetailsContainer from './GameDetailsContainer';

export default function EndBanner({ attempts, results, closeHandler, isWin, puzzle, dayNum }) {
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
      <GameDetailsContainer
        attempts={attempts}
        results={results}
        closeHandler={closeHandler}
        isWin={isWin}
        puzzle={puzzle}
        dayNum={dayNum}
      />
    </div>
  );
}
