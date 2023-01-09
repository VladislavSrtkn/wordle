import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header({ showRulesHandler }) {
  return (
    <header>
      <h1>
        {
          <HelpOutlineIcon
            onClick={showRulesHandler}
            sx={{ color: 'grey', position: 'absolute', left: '10px', top: '30px' }}
          />
        }
        Wordle
      </h1>
    </header>
  );
}
