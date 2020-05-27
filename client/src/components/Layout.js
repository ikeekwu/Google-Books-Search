import React from "react";
import Nav from "../components/Nav"
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import '../components/Layout.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Layout() {
    const classes = useStyles();
    return (
      <Box>
        <Nav />
        <Container className="loads">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={1} className={classes.paper}>
                  <h1>Search Results</h1>
                  <hr />
                  <Container>

                  </Container>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={1} className={classes.paper}>
                  <h1>Saved Books</h1>
                  <hr />
                  <Container>
                    
                  </Container>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    );
}