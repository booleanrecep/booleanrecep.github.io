import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import AirplayIcon from '@material-ui/icons/Airplay';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Fab from '@material-ui/core/Fab';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Skills from "./Skills";
import About from './About';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
     transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    display:"flex",
    marginTop:"10vh",
    flexGrow: 1,
    width:"70%",
    height:"90%",
    padding: theme.spacing(3),
    
  },
  fabButton: {
    justifyContent:"space-between"

  },
  img:{
      marginLeft:"20vh",
      border:"white",
      [theme.breakpoints.down("xs")]:{
          marginLeft:"2vh",
          width:"100%",
          height:"100%"
      }
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
    <Router>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.fabButton}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>{props.header}</Typography>

          <Fab onClick={props.lightClick} color="secondary" aria-label="add" >
            <EmojiObjectsIcon  />
          </Fab>
        </Toolbar>
         
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),   
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link to="/about" style={{textDecoration:"none",color:"inherit"}}>
                <ListItem   key="about" id="about">
                    <ListItemIcon ><PersonIcon/></ListItemIcon>
                    <ListItemText primary="ABOUT ME" />
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/projects"  style={{textDecoration:"none",color:"inherit"}}>
                <ListItem button id="projects" key="projects">
                    <ListItemIcon><ImportContactsIcon /></ListItemIcon>
                    <ListItemText primary="PROJECTS" />
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/skills"  style={{textDecoration:"none",color:"inherit"}}>
                <ListItem button id="skills" key="skills">
                    <ListItemIcon><AirplayIcon /></ListItemIcon>
                    <ListItemText primary="SKILLS" />
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/contact"  style={{textDecoration:"none",color:"inherit"}}>
                <ListItem  button id="contact" key="contact">
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="CONTACT" />
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/cv"  style={{textDecoration:"none",color:"inherit"}}>
                <ListItem button  id="cv" key="cv">
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <ListItemText primary="CV" />
                </ListItem>
            </Link>
            <Divider />
        </List>
       
      </Drawer>

      <main className={classes.content} style={props.lightStyle}>
        <Route path="/about" render={()=><About imgAbout={props.imgAbout}/>}>

        </Route>
        <Route path="/cv" render={()=>
            <Grid >
                <img alt="ııı" className={classes.img} src={require(`${props.image}`)}/>
            </Grid>}/>

        <Route path="/projects" render={()=>
            <Projects  projects={props.projects}/>} />
            
        <Route path="/skills" render={()=>
            <Skills skills={props.skills}/>}/>
        <Route path="/contact" component={ContactForm}/>
      </main>
       
    </Router>
    </div>

  );
}
