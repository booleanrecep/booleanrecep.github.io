import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import nextId from "react-id-generator";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft:"20vh",
    marginRight:"10vh",
    [theme.breakpoints.down("xs")]:{
        marginLeft:"1vh",
        marginRight:"1vh",
        flexDirection:"column"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("xs")]:{
      margin:"1vh",
     
  }
      
  },
  img:{
    paddingTop: '56.25%',
    width:"50%",
    height:"20%",
    marginLeft:"20%",
    marginTop:"3vh",
    borderRadius:"2vh",
    [theme.breakpoints.down("xs")]:{
        margin:"1vh",
    }
    
  }
}));

export default function Projects(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {props.projects.map(project=>
            <Grid item key={nextId()} xs={6}>
                <Paper  className={classes.paper}>
                    <Card  >
                        <CardMedia image={project.icon}
                                   title={project.name}
                                   className={classes.img}
                                   />
                        <CardContent>
                            <Typography>
                                {project.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        )}
        
        </Grid>
    </div>
  );
}
