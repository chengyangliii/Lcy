import React, { useState } from "react";
import lcy from './lcy.jpeg'
import cover from './cover.png'
import Timeline from "./components/Timeline";
import { 
  createMuiTheme, 
  MuiThemeProvider,
  makeStyles
 } from "@material-ui/core/styles";
import { 
  CssBaseline,
  Container,
  Box,
  Grid,
  Typography,
  Toolbar,
  AppBar,
  Switch,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Slide,
  Fade,
 } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    lineHeight: '2.5',
    fontWeight: '600',
    textTransform: "uppercase"
  },
  nav : {
    marginRight: theme.spacing(2),
  },
  intro: {
    fontSize: '2.3rem',
    lineHeight: '1.5',
    fontWeight: '100',
    fontFamily: "Poppins, sans-serif",
  },
  icon: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  image: {
    paddingTop: theme.spacing(2),
    borderRadius: '10%'
  },
  cardroot: {
    maxWidth: 345,
    marginTop: theme.spacing(3),
    textDecoration: 'underline',
    textDecorationColor: '#ffffff',
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: 1.8,
    fontWeight: 500,
    fontFamily: "Poppins, sans-serif",
  },
  cardTitle: {
    fontSize: '1.3rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: "Poppins, sans-serif",
  },
  sectionIntro: {
    fontSize: '1.6rem',
    lineHeight: 1,
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  media: {
    height: 140,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function App() {

  /* Style setting */
  const classes = useStyles()

  /* Dark mode setting */
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#00274C' : '#03a9f4'; // indigo blue
  const mainSecondaryColor = darkState ? '#FFCB05' : '#4caf50'; // yellow green
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (

      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Chengyang Li
              </Typography>
              {/* <Button className={classes.nav}>Project</Button> */}
              <Switch checked={darkState} icon={<Brightness7Icon/>} checkedIcon={<Brightness2Icon/>} onChange={handleThemeChange} />
            </Toolbar>
          </AppBar>
        </div>

        <Container maxWidth="lg">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                {/* <Paper className={classes.paper} color='primary'>xs=2</Paper> */}
              </Grid>
              <Grid item xs={5} >
                {/* <Paper className={classes.paper} color='primary'>xs=5</Paper> */}
                <Slide direction="up" in='true' mountOnEnter unmountOnExit>
                  <Box className={classes.intro} m={1} color="primary">
                  I am <strong>Chengyang Li</strong>,<br></br>
                    a fouth year computer science student <br></br>
                    and a full-stack developer.
                  <br></br>
                  <a href="https://github.com/chengyangliii">
                    <GitHubIcon style={{ fontSize: 50 }} color="primary" className={classes.icon} />
                  </a>
                  <a href="https://www.linkedin.com/in/chengyang-allan-li">
                    <LinkedInIcon style={{ fontSize: 55 }} color="primary" className={classes.icon} />
                  </a>
                  </Box>
                </Slide>
              </Grid>
              <Grid item xs={3}>
                {/* <Paper className={classes.paper} color='primary'>xs=3</Paper> */}
                <div >
                  <img src={lcy} alt="lcy" width='100%' className={classes.image}/>
                </div> 
              </Grid>
              <Grid item xs={2} >
                {/* <Paper className={classes.paper} color='primary'>xs=2</Paper> */}
              </Grid>
            </Grid>
          </div>
          

          
          {/* <Typography className={classes.sectionIntro} >
            Recent Projects
          </Typography>
          <Grid container justify = "center" >
            <Fade in='true' style={{ transformOrigin: '0 0 0' }}{...({ timeout: 2000 })}>
              <a href="https://github.com/chengyangliii/nodejs"> 
                <Card className={classes.cardroot} >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={cover}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography className={classes.cardTitle} gutterBottom>
                        <strong>Exam System Web App</strong>
                      </Typography>
                      <Typography className={classes.cardText} >
                        The initiative is to arrange various exams, facing multiple groups of users. 
                        Creating and grading are also considered as parts of this web app.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Fade>
          </Grid> */}
          
          <Typography className={classes.sectionIntro} >
            Recent experiments
          </Typography>
          <Fade in='true' style={{ transformOrigin: '0 0 0' }}{...({ timeout: 2000 })}>
            <Timeline />
          </Fade>

        </Container>
      </MuiThemeProvider>   
  )
}


