import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Header({ showRulesHandler, showStatisticsHandler }) {
  return (
    <header
      style={{
        borderBottom: '1px solid #d7d7d7',
        width: '100%',
        textAlign: 'center',
        marginBottom: '1rem',
      }}
    >
      <h1 style={{ margin: '0.5rem' }}>
        <HelpOutlineIcon
          onClick={showRulesHandler}
          sx={{ color: 'grey', position: 'absolute', left: '10px', top: '15px' }}
        />
        Wordle
        <BarChartIcon
          onClick={showStatisticsHandler}
          sx={{ color: 'grey', position: 'absolute', right: '10px', top: '15px' }}
        />
      </h1>
    </header>
  );
}
