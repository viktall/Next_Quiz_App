import React from 'react';
import { AppBar, Toolbar} from '@mui/material';



export const Tab=({children})=> {
    return (
      <div>
        
            <AppBar position="fixed">
                  <Toolbar>QUIZ</Toolbar>
            </AppBar>
            <Toolbar />
                    <h1>{children}</h1>
        </div>
        
    
    )
  }