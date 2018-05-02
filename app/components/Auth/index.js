import React from 'react';
import PropTypes from 'prop-types';

import { renderRoutes } from 'react-router-config';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const Auth = ({ route, classes }) => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Paper className={classes.root}>{renderRoutes(route.routes)}</Paper>
    </Grid>
  </Grid>
);

Auth.propTypes = {
  route: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);