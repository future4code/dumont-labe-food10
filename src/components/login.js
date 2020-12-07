import React,{useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Main = styled.main`
  position:absolute;
  top:0;left:0;
  background-color:rgb(206, 230, 230);
  width:100vw; height:100vh;
  text-align: center;justify-items: center;
    h1{font-size:100px;}
    form{width:20%;height:30%;margin:auto;}
    input{width:100%;height:20%;font-size:1.8em;text-align: center; margin-top:8vh;background-color: greenyellow;}
    button{width:50%;height:20%;margin-top:30px;font-size:32px;
    background-color:#819FF7;}
    a{margin-left:20px; font-size:20px;}
`

export const Login = e => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.target.value)
    const handlePassowrd = e => setPassword(e.target.value)

    const logar = e => {
      e.preventDefault()
      const body = {email, password}

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login',body)
    }
      

    return(
    <Main>
        <h1>Logar</h1>
      
      <form>
        <input 
        type={'email'}
        placeholder={'E-mail'}
        value={email}
        onChange={handleEmail}>
        
        </input>
        <input 
        type={'password'}
        placeholder={'Senha'}
        value={password}
        onChange={handlePassowrd}>

        </input>

        <button onClick={logar}>Logar</button>
        <a href='/'>Não tem cadastro?</a>
      </form>
    </Main>
    )
}