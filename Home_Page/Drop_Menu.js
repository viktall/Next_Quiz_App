import React, { useState } from 'react';
import Router from 'next/router';
import categories from './Data';
import {Button, TextField, MenuItem, Grid, Paper, Avatar} from '@mui/material';



export const DropMenu=()=>{

    const [details, setDetails]=useState({names:'', label:''})
    
    const handlechange=(e)=>{
        const{name, value}=e.target;
        setDetails(prev=>({...prev, [name]:value }))
    }
    const{names, label}=details
       const HandleSubmit=(e)=>{
        
                    e.preventDefault()
                    Router.push({pathname:'/Quiz_Page',
                                 query:{names,label}
                                })
            }


    const Paperstyle={padding:20, height:'60vh', width:400, margin:'80px auto'}
    const pad={mb:'20px'}
    console.log(label)
    
return(

      <Grid>
        <Paper style={Paperstyle} elevation={10}>
            <Grid align='center'>
               <Avatar>vH</Avatar>  
            </Grid>
            <form onSubmit={HandleSubmit}>  
                    <TextField 
                        label="Enter your name here" 
                        variant="outlined" 
                        onChange={handlechange}
                        value={names}
                        name="names"
                        required
                        fullWidth
                        sx={pad}
                        />
            
                    <TextField 
                        select 
                        label="Select Category" 
                        variant="outlined" 
                        onChange={handlechange}
                        value={label}
                        name="label"
                        required
                        fullWidth
                        sx={pad}
                        >
                                    {categories.map(({id, category})=>(
                                        <MenuItem 
                                            key={id} 
                                            value={id}
                                        >
                                            {category}
                                        </MenuItem>
                                    
                                    ))}
                    </TextField>  
            
                <Button 
                    type='submit' 
                    variant="contained" 
                    size='large' 
                    fullWidth
                    >
                        SUBMIT
                </Button>

            </form>
            
            </Paper>
        </Grid>
    )}
