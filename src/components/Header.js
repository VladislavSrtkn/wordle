import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header({ showRulesHandler, showStatisticsHandler, themeToggler, theme }) {
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
          sx={{ color: '#b5b5b5', position: 'absolute', left: '10px', top: '15px' }}
        />
        {theme === 'light' && (
          <DarkModeIcon
            onClick={themeToggler}
            sx={{ color: '#b5b5b5', position: 'absolute', left: '50px', top: '15px' }}
          />
        )}
        {theme === 'dark' && (
          <LightModeIcon
            onClick={themeToggler}
            sx={{ color: '#b5b5b5', position: 'absolute', left: '50px', top: '15px' }}
          />
        )}
        Wordle
        <BarChartIcon
          onClick={showStatisticsHandler}
          sx={{ color: '#b5b5b5', position: 'absolute', right: '10px', top: '15px' }}
        />
      </h1>
    </header>
  );
}
