import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formItem: {
    padding: theme.spacing(1,0,2)
  }
}));

export default function SignUpView() {
  const classes = useStyles();

  const [score, setScore] = useState("N/A");




  const calculateScore = () => {
    console.log('clicked yoooooo');
  }

  const addToDB = () => {
    console.log('clicked yoooooo');
  }




  
  return (

    

    <Container component="main">


      <Typography component="h1" variant="h1">
        Final Project IS415
      </Typography>

      <div className={classes.paper}>

        <Grid container>
            <Grid container xs={6}>

              <div className={classes.formItem}>
                <Typography component="h1" variant="h5">
                  Input Info and Calculate Score: {score}
                </Typography>
              </div>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>

                    <div className={classes.formItem}>
                      <TextField
                        variant="outlined"
                        required
                        id="field1"
                        label="Field 1"
                      />
                    </div>

                    <div className={classes.formItem}>
                      <TextField
                        variant="outlined"
                        required
                        id="field2"
                        label="Field 2"
                      />
                    </div>

                    <div className={classes.formItem}>
                      <Button onClick={() => calculateScore()}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Calculate
                      </Button>
                      
                    </div>
                    
                  </Grid>
                </Grid>



            </Grid>





            <Grid container xs={6}>

              <div className={classes.formItem}>
                <Typography component="h1" variant="h5">
                  Add extra data to DB
                </Typography>
              </div>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>

                  <div className={classes.formItem}>
                      <TextField
                        variant="outlined"
                        required
                        id="field1"
                        label="Field 1"
                      />
                    </div>

                    <div className={classes.formItem}>
                      <TextField
                        variant="outlined"
                        required
                        id="field2"
                        label="Field 2"
                      />
                    </div>
                    
                  </Grid>
                </Grid>

                <div className={classes.formItem}>
                      <Button onClick={() => addToDB()}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Add to DB
                      </Button>
                      
                </div>



            </Grid>


        </Grid>



      </div>
    </Container>
  );
}
