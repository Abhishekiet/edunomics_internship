import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';


const Square=(props)=>{
    return(
        <div>
            <Grid container>
                <Grid item lg={11} component={Box} >
                    <Paper component={Box} p={3} ml={2} style={{backgroundColor:"#66CDAA"}}  borderBottom={3} borderColor="#d50000">
                         <Typography  variant="h5" align="center"> departed </Typography>
                    </Paper>
              </Grid>
            </Grid>
        </div>
    )
}
export default Square