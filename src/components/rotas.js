import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Inicio from './inicio'
import NaoEncontrado from './naoEncontrado'
import PedidoAndamento from './pedidoAndamento'

import Cadastro from './cadastro+login/cadastro'
import Login from './cadastro+login/login'
import CadastroEndereco from './cadastro+login/cadastroEndereco'
import CadastroPreenchido from './cadastro+login/cadastroPreenchido'

import Carrinho from './carrinho/carrinho'
import CarrinhoVazio from './carrinho/carrinhoVazio'

import Buscar from './home/buscar'
import Feed from './home/feeds'

import EditarCadastro from './perfil/editarCadastro'
import EditarEndereco from './perfil/editarEndereco'
import Perfil from './perfil/perfil'
import PerfilHistorico from './perfil/perfilHistorico'

import Confirmacao from './restaurante/confirmacao'
import Restaurante from './restaurante/restaurante'



export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Inicio/>
                </Route>
                <Route exact path='/naoEncontrado'>
                    <NaoEncontrado/>
                </Route>
                <Route exact path='/pedidoAndamento'>
                    <PedidoAndamento/>
                </Route>

                <Route exact path='/cadastro'>
                    <Cadastro/>
                </Route>
                <Route exact path='/cadastroEndereco'>
                    <CadastroEndereco/>
                </Route>
                <Route exact path='/cadastroPreenchido'>
                    <CadastroPreenchido/>
                </Route>
                <Route exact path='/login'>
                    <Login/>
                
                </Route>
                <Route exact path='/carrinho'>
                    <Carrinho/>
                </Route>
                <Route exact path='/carrinhoVazio'>
                    <CarrinhoVazio/>
                </Route>
                
                <Route exact path='/buscar'>
                    <Buscar/>
                </Route>
                <Route exact path='/feed'>
                    <Feed/>
                </Route>
                
                <Route exact path='/editarCadastro'>
                    <EditarCadastro/>
                </Route>
                <Route exact path='/editarEndereco'>
                    <EditarEndereco/>
                </Route>
                <Route exact path='/perfil'>
                    <Perfil/>
                </Route>
                <Route exact path='/perfilHistorico'>
                    <PerfilHistorico/>
                </Route>

                <Route exact path='/confirmacao'>
                    <Confirmacao/>
                </Route>
                <Route exact path='/restaurante'>
                    <Restaurante/>
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}