import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Inicio} from './inicio'
import {Cadastro} from './cadastro'
import {Login} from './login'
import {CadastroEndereco} from './cadastroEndereco'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Inicio/>
                </Route>
                <Route exact path='/cadastro'>
                    <Cadastro/>
                </Route>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/cadastroEndereco'>
                    <CadastroEndereco/>
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}