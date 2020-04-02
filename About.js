import React from 'react'
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import nextId from "react-id-generator";


const useStyles=makeStyles(theme=>({
    root: {
        height:"100vh",
        flexGrow: 1,
        marginLeft:"10vh",
        marginRight:"10vh",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"1vh",
            marginRight:"1vh",
        }
      },
      paper: {
        // justifyContent:"center",

        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
          
      },
      img:{
        paddingTop: '66.25%',
        width:"90%",
        height:"20%",
        margin:"1vh auto",
        // marginLeft:"20vh",
        // marginTop:"3vh",
        borderRadius:"2vh",
        [theme.breakpoints.down("xs")]:{
            margin:"1vh",
            width:"80%"
        }
        
      }
    }));
export default function About(props) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3} justify="center">
              <Grid item key={nextId()} xs={6}>
                  <Paper className={classes.paper}>
                      <Card >
                          <CardMedia 
                                image={props.imgAbout}
                                title="Avatar of Me"
                                className={classes.img}
                                />
                          {/* <CardContent>
                              <Typography>
                              Soon..
                              </Typography>
                          </CardContent> */}
                      </Card>
                  </Paper>
              </Grid>
          
          </Grid>
      </div>
    )
}
