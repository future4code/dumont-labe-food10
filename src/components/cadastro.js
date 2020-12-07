import React,{useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Main = styled.main`
    position:absolute;
    top:0;left:0;
    background-color:rgb(206, 230, 230);
    width:100vw; height:100vh;
    text-align: center;justify-items: center;
      h1{font-size:100px;}
    
`

export const Cadastro = e =>{
  const history = useHistory()

  const [form, setForm] = useState({email: '', password: '',username: ''})
  
  return(
    <Main>
        <h1>Cadastre-se</h1>
    </Main>
  )
}
