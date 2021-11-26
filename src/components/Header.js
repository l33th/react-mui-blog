import React from 'react';
import {
  Badge,
  Divider,
  IconButton,
  // makeStyles,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Eleet Developer Hackathon
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={7} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        <h3>
          Build scalable cross platform applications. <br /> Build the future.
        </h3>
      </Toolbar>
    </>
  );
};

export default Header;
