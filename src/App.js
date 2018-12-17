import React, { Component } from 'react';
import Head from './head/Head';
import Card from './card/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Head/>
       <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper ><Card/></Paper>
        </Grid>

      </Grid>

      </div>
    );
  }
}
export default App;
