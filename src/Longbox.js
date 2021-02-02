import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';


const Longbox=(props)=>{
    return(
        <div>
            <Grid >
                <Grid item lg={11} component={Box} >
                    <Paper component={Box} p={3} ml={2} style={{backgroundColor:"#6495ED"}}  borderBottom={3} borderColor="#d50000">
                         <Typography  variant="h5" align="center"> departed </Typography>
                    </Paper>
              </Grid>
            </Grid>
        </div>
    )
}
export default Longbox