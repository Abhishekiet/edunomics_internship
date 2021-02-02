import React, { Component } from 'react';
import { Box , Container , Grid, Typography, Paper} from '@material-ui/core/';
import Lanecomp from './Lanecomp' 


class App extends Component{
    constructor(props)
    {
      super(props)
      this.state= {
       
     }
    }
  render()
  { 
    const { fun } =this.props
    const show = this.props.Contents.map(a=><Lanecomp key={a.id} title={a.title} fun={()=>fun(a.id)}/>)
    return(
      <div>
         {show}
      </div>
    )
  }
}
export default App