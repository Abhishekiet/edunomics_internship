import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper, TextField, Button} from '@material-ui/core/';

const Edit=(props)=>{
    return(
        <>
         <Grid container align="center">
             <Grid item sm={2}></Grid>
             
             <Grid item sm={8}>
                 <Box  border={3} borderColor="#d50000" p={3}>
                     <Paper component={Box} p={2} elevation={4} style={{backgroundColor:"#191970"}}>
                         <Typography variant="h4" align="left" style={{color:"white"}}> Edit Lane </Typography>
                     </Paper>

                     <TextField fullWidth style={{marginTop:"150px"}} value={props.title} onChange={props.handleEdit}/>
                     
                     <Button style={{marginTop:"50px"}} variant="contained" color="primary" fullWidth
                     onClick={props.handleEditbtn}> 
                         <Typography variant="h5" align="center" style={{color:"white"}}>
                          EDIT </Typography> 
                    </Button>
                 </Box>
             </Grid>
         </Grid>
        </>
    )
}
export default Edit