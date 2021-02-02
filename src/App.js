import React, { Component } from 'react';
import Sidenav from './Sidenav'
import Middle from './Middle'
import Header from './Header'
import Edit from './Edit'
import { Box , Container , Grid, Paper, Typography} from '@material-ui/core/';

class App extends Component{
  constructor()
  {
    super()
    this.state= {
      Contents : [ {id:"1" ,title:"Phases"} , {id:"2", title:"Journey " }, {id:"3" ,title:"Storyboard"} ,
      {id:"4" ,title:"Ideas"} , {id:"5", title:"Thinking" }, {id:"6" ,title:"Action"}],
      Edit:false ,
      textfield: "text",
      id: ""
   }
  }
  fun=(id)=>{
    const selecteditem = this.state.Contents.find(item=>item.id == id) 
    console.log(selecteditem)
    this.setState({Edit:true , textfield:selecteditem.title, id:selecteditem.id})
 }
 handleEdit=(e)=>{
   this.setState({textfield:e.target.value})
 }
 handleEditbtn=()=>{
    const items = this.state.Contents
    items.map(item =>{
      if(item.id==this.state.id){
        item.title=this.state.textfield
      }
    })
    this.setState({Contents:items , Edit:false})
 }
  render()
  {
    
    return(
      <>
      <Grid container align="center">
        <Grid item sm={12} component={Box} mt={4}>
           <Header />
        </Grid>
      </Grid>
       
      <Grid container style={{marginTop:"50px"}}> 
      <Grid item sm={12} component={Box} mt={4}>
           <Paper component={Box} p={1} style={{backgroundColor:"#191970"}}>
             <Typography variant="h4" align="center" style={{color:"white"}}>Demo</Typography>
           </Paper>
        </Grid>
      </Grid>

      <Grid container direction="row" >
            <Grid item sm={2}>
                <Sidenav Contents={this.state.Contents} fun={this.fun}/>
            </Grid>
            
            <Grid item sm={10}>
              {this.state.Edit?<Edit title={this.state.textfield} handleEdit={this.handleEdit} handleEditbtn={this.handleEditbtn}/>:<Middle /> }
                
            </Grid>

        </Grid>
      </>
    )
  }
}
export default App