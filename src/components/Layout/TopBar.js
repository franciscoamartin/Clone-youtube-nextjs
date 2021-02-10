import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} color="default">
        <ToolBar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <MenuIcon />
            <img
              src="/new-youtube-logo.svg"
              alt="logo"
              className={classes.logo}
            />
          </Box>
          <Box />
          <Box />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default TopBar;
