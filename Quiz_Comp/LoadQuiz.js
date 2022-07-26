import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export const Quiz_Component = ()=> {

    const {query:{names, label}} = useRouter()
    const [loadQuiz, setLoadQuiz]=useState([])
    

    useEffect(()=> {

        const FetchQuiz = async()=>{
        const {data} = await axios(`https://opentdb.com/api.php?amount=10&category=${label}&type=multiple`) 
        setLoadQuiz(data.results)  
        console.log(loadQuiz)
      }
        FetchQuiz()
        
        }, [loadQuiz])

  return (
      
    <div>
                  Quiz Page
                  Hello {names}-
                  {loadQuiz[0].question}
                {
                  
                }
                
    </div>
  )
}




