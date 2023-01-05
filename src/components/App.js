import GameField from './Game_field';
import Header from './Header';

function App() {
  return (
    <div
      style={{ maxWidth: '28rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />
      <GameField />
    </div>
  );
}

export default App;
