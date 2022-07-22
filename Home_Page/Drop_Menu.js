import React, { useState } from 'react';
import Router from 'next/router';
import categories from './Data';
import {Button, TextField, MenuItem, Grid, Paper} from '@mui/material';


export const DropMenu=()=>{
    const [details, setDetails]=useState({names:'', category:''})
    
    const handlechange=(e)=>{

        const{name, value}=e.target;
        setDetails({ ...details, [name]:value })

    }

    const{names, category}=details
       const HandleSubmit=(e)=>{

        
        
                    if(name.trim && category.trim()){   

                            e.preventDefault();
                            setDetails('')
                            
                            Router.push({pathname:'/Quiz_Page',
                                        query:{names, category}
                                        })

                    }else{
                            e.preventDefault()
                            setDetails('')
                        }

            }


    const Paperstyle={padding:20, height:'60vh', width:400, margin:'80px auto'}
    const pad={mb:'20px'}
    console.log(details.category)
    

return(


      <Grid>
        <Paper style={Paperstyle} elevation={10}>
            <Grid align='center'>
                vh 
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
                        label=" Select Category" 
                        variant="outlined" 
                        onChange={handlechange}
                        defaultValue={0}
                        value={category}
                        name="category"
                        required
                        fullWidth
                        sx={pad}
                        >
                                    {categories.map((cat)=>(
                                        <MenuItem 
                                            key={cat.value} 
                                            value={cat.category}
                                        >
                                            {cat.category}
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
