import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BuildIcon from '@material-ui/icons/Build';
import './Nav.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    opacity: 0.85,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(#FF9A7C, #5A265E)'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 22, 3, 0),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hamburgerDiv: {
      position: 'absolute',
      top: '20px',
      right: '40px'
  },
  hamburger: {
      color: 'black',
      cursor: 'pointer',
      width: '70px',
      height: '70px',
  },
  navText: {
    fontFamily: "\'Press Start 2P\', cursive",
    fontSize: '14px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  menuIcons : {
      height: '100px',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Nav = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    props.setopenNav(!props.openNav);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    props.setopenNav(!props.openNav);
    setOpen(false);
  };
    return (
        <div className="nav">
            {!open ? 
            <IconButton onClick={handleDrawerOpen} className={classes.hamburgerDiv}>
                <MenuIcon className={classes.hamburger} />
            </IconButton> : null}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton style={{color: 'black'}} onClick={handleDrawerClose}>
                    {theme.direction !== 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                <ListItem onClick={() => props.setTab('About Me')} className={classes.menuIcons} button key={'About Me'}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography className={classes.navText} style={{color: 'beige'}} primary={'About Me'} />
                </ListItem>
                <ListItem onClick={() => props.setTab('Projects')} className={classes.menuIcons} button key={'Projects'}>
                    <ListItemIcon>
                        <VideogameAssetIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography className={classes.navText} style={{color: 'beige'}} primary={'Projects'} />
                </ListItem>
                <ListItem onClick={() => props.setTab('Skills')} className={classes.menuIcons} button key={'Skills'}>
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography className={classes.navText} style={{color: 'beige'}} primary={'Skills'} />
                </ListItem>
                <ListItem onClick={() => props.setTab('Experience')} className={classes.menuIcons} button key={'Experience'}>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography className={classes.navText} style={{color: 'beige'}} primary={'Experience'} />
                </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Nav;