import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MenuItems from './Data';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import { ErrorComponent } from './Error_Msg';
import Router from 'next/router';


export const DropMenu=({name, category, setName, setCategory})=>{
       const [error, setError]=useState(false)

   const HandleSubmit=(e)=>{
        
        if(name.trim() && category.trim()){     
                setError(false)
                e.preventDefault()
                setName('')
                setCategory('')
                Router.push({pathname:'/Quiz_Page',
                             query:{name, category}
                            })

        }else{
                setError(true)
                e.preventDefault()
                setName('')
                setCategory('')
             }

} 

return(

<>
    
      <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

        <Grid item xs={10}>
        {error && <ErrorComponent>Please enter Your name</ErrorComponent>}
            <form onSubmit={HandleSubmit}>
                    <TextField 
                        fullWidth 
                        label="Enter your name here" 
                        variant="outlined" 
                        style={{display:'flex', marginTop:30, marginBottom:18}}
                        onChange={e=>setName(e.target.value)}
                        value={name}/>
            
                    <TextField 
                        select 
                        fullWidth
                        label=" Select Category" 
                        variant="outlined" 
                        style={{marginBottom:18}}
                        onChange={e=>setCategory(e.target.value)}
                        value={category}>

                                    {MenuItems.map(menu=>(
                                        <MenuItem 
                                            key={menu.value} 
                                            value={menu.value}
                                        >
                                            {menu.category}
                                        </MenuItem>
                                    
                                    ))}
                    </TextField>  
            
            <div>
                <Button type='submit' fullWidth variant="contained">SUBMIT</Button>
            </div>
            </form>
        </Grid>
      </Grid>

    </>

    
    )}
