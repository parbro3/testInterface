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
    padding: theme.spacing(1,0,2),
    alignContent: 'center'
  },
  root: {
    flexGrow: 1
  },
  title: {
    marginBottom: '5%'
  }
}));

export default function SignUpView() {
  const classes = useStyles();

  const [score, setScore] = useState("N/A");
  const [diabetes, setDiabetes] = useState("N/A");

  const [pregnancy, setPState] = useState("");
  const [glucose, setGState] = useState("");
  const [bloodPressure, setBPState] = useState("");
  const [bmi, setBState] = useState("");
  const [diabetesPedigreeFunction, setDState] = useState("");
  const [age, setAState] = useState("");


  const calculateScore = () => {

    if(pregnancy != "" && glucose != "" && bloodPressure != "" && bmi != "" && diabetesPedigreeFunction != "" && age != ""){
      console.log('clicked duddee');

      const requestBody = {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "Pregnancies",
              "Glucose",
              "BloodPressure",
              "SkinThickness",
              "Insulin",
              "BMI",
              "DiabetesPedigreeFunction",
              "Age",
              "Outcome"
            ],
            "Values": [
              [
                pregnancy,
                glucose,
                bloodPressure,
                "0",
                "0",
                bmi,
                diabetesPedigreeFunction,
                age,
                "0"
              ]
            ]
          }
        },
        "GlobalParameters": {}
      }
  
      const requestOptions = {
          method: 'POST',
          headers: {'Accept':'application/json','Ocp-Apim-Subscription-Key':'9a728b5f8e694070b8ab956732e64059','Content-Type':'application/json','Authorization': 'Bearer XxNYiPfX0vAj4b9XTdrwSpnXqTMeoB88aO7ymtyk+ieI7Y8HbybqGONxypPQF4haHlO1FiiO83V+H7hlyNpZgQ=='},
          body: JSON.stringify(requestBody)
      };
  
      fetch('https://callml.azure-api.net/callMLStudio/workspaces/4c3dc530a4aa454bb5eb182869203b08/services/4142366cbe68443f8fbbe48e2d64f766/execute?api-version=2.0&details=true', requestOptions)
      .then(async response => {
          const data = await response.json();
  
          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
  
          console.log('here is the supposed data ' + JSON.stringify(data));
          const values = data.Results.output1.value.Values[0];
          console.log('values yo : ' + JSON.stringify(values));
          setScore(values[values.length - 1]);
          setDiabetes(values[values.length - 2])
          
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
    } else {
      setDiabetes('Please fill in all the form fields')
    }




  }

  const addToDB = () => {
    console.log('clicked yoooooo');
  }




  
  return (

  <div className={classes.root}>

    <Typography className={classes.title} component="h1" variant="h1">
      Final Project IS415
    </Typography>


    <Grid container spacing={3}>
      <Grid item xs={12}>

        <div className={classes.formItem}>
          <Typography className={classes.title} component="h2" variant="h3">
            Diabetes: {diabetes}
          </Typography>
        </div>

        <div className={classes.formItem}>
          <Typography className={classes.title} component="h2" variant="h3">
            Score: {score}
          </Typography>
        </div>



        <div className={classes.formItem}>
          <TextField
            onChange={e => setPState(e.target.value)}
            variant="outlined"
            required
            id="Pregnancies"
            label="Pregnancies"
          />
        </div>

        <div className={classes.formItem}>
          <TextField
            onChange={e => setGState(e.target.value)}
            variant="outlined"
            required
            id="Glucose"
            label="Glucose"
          />
        </div>

        <div className={classes.formItem}>
          <TextField
            onChange={e => setBPState(e.target.value)}
            variant="outlined"
            required
            id="BloodPressure"
            label="BloodPressure"
          />
        </div>
        
        <div className={classes.formItem}>
          <TextField
            onChange={e => setBState(e.target.value )}
            variant="outlined"
            required
            id="BMI"
            label="BMI"
          />
        </div>

        <div className={classes.formItem}>
          <TextField
            onChange={e => setDState(e.target.value)}
            variant="outlined"
            required
            id="DiabetesPedigreeFunction"
            label="DiabetesPedigreeFunction"
          />
        </div>

        <div className={classes.formItem}>
          <TextField
            onChange={e => setAState(e.target.value)}
            variant="outlined"
            required
            id="Age"
            label="Age"
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



  );


}




