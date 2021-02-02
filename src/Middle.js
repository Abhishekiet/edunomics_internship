import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';
import Longbox from './Longbox' 
import Square from './Square' 


class App extends Component{
    constructor()
    {
      super()
      this.state= {
    
     }
    }
  render()
  {
    
    return(
      <div>
          <Grid container>
              
              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} style={{maxHeight:"72px"}}>
                      <Grid container >
                          
                          <Grid item lg={6}>
                             <Longbox />
                          </Grid>
                          <Grid item lg={6}>
                             <Longbox />
                          </Grid>

                      </Grid>
    
                   </Paper>
              </Grid>

              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} pl={3} style={{maxHeight:"72px"}}>
                    <Longbox />
                   </Paper>
              </Grid>

              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} pl={3} style={{maxHeight:"72px"}}>
                
                <Grid container>
                    <Grid item lg={4}> 
                       <Square colour="red"/>
                    </Grid>
                    <Grid item lg={4}> 
                        <Square />
                    </Grid>
                    <Grid item lg={4}> 
                       <Square />
                    </Grid>
                   
                </Grid>

                   </Paper>
              </Grid>
              

              
              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} style={{maxHeight:"72px"}}>
                      <Grid container >
                          
                          <Grid item lg={6}>
                             <Longbox />
                          </Grid>
                          <Grid item lg={6}>
                             <Longbox />
                          </Grid>

                      </Grid>
    
                   </Paper>
              </Grid>

              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} pl={3} style={{maxHeight:"72px"}}>
                    <Longbox />
                   </Paper>
              </Grid>

              <Grid item lg={12} component={Box} borderBottom={3} borderColor="#d50000">
                  <Paper component={Box} pt={1} pb={2} pl={3} style={{maxHeight:"72px"}}>
                
                <Grid container>
                    <Grid item lg={4}> 
                       <Square colour="red"/>
                    </Grid>
                    <Grid item lg={4}> 
                        <Square />
                    </Grid>
                    <Grid item lg={4}> 
                       <Square />
                    </Grid>
                   
                </Grid>

                   </Paper>
              </Grid>

          </Grid>
      </div>
    )
  }
}
export default App