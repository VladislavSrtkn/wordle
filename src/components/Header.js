import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Header({ showRulesHandler, showStatisticsHandler }) {
  return (
    <header>
      <h1>
        <HelpOutlineIcon
          onClick={showRulesHandler}
          sx={{ color: 'grey', position: 'absolute', left: '10px', top: '30px' }}
        />
        Wordle
        <BarChartIcon
          onClick={showStatisticsHandler}
          sx={{ color: 'grey', position: 'absolute', right: '10px', top: '30px' }}
        />
      </h1>
    </header>
  );
}
