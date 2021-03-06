import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import TelaInicial from '../screens/Login+SingUp/TelaInicial'
import Login from '../screens/Login+SingUp/Login'
import SignUp from '../screens/Login+SingUp/SingUp'
import CadastroEndereco from '../screens/Login+SingUp/CadastratEndereco'

import Feed from '../screens/Home/Feed'
import SearchResults from '../screens/Home/SearchResults'

import Carrinho from '../screens/Carrinho/CarrinhoItem'

import EditarCadastro from '../screens/Perfil/EditarCadastro/EditarCadastro'
import EditarEndereco from '../screens/Perfil/EditarEndereco/EditarEndereco'
import PerfilHistoricoVazio from '../screens/Perfil/PerfilHistoricoVazio'
import Perfil from '../screens/Perfil/Perfil/Perfil'

import Restaurante from '../screens/Restaurante/Restaurante'

const Router = () => {
  return(
    <BrowserRouter>
        <Switch>
          {/*Login+SingUp */}
          <Route exact path={"/telaInicial"} component={TelaInicial}/>
          <Route exact path={"/login"} component={Login}/>
          <Route exact path={"/signup"} component={SignUp}/>
          <Route exact path={"/cadastroEndereco"} component={CadastroEndereco}/>

                {/*Home*/}
              <Route exact path={["/", "/feed"]} component={Feed}/>
              <Route exact path={"/resultados"} component={SearchResults}/>

                {/*Carrinho*/}
              <Route exact path={"/carrinho"} component={Carrinho}/>

                {/*Perfil */}
          <Route exact path={"/editarCadastro"} component={EditarCadastro}/>
          <Route exact path={"/editarEndereco"} component={EditarEndereco}/>
          <Route exact path={"/perfil"} component={Perfil}/>
          <Route exact path={"/perfilHistoricoVazio"} component={PerfilHistoricoVazio}/>

                {/*Restaurante*/}
                <Route exact path={"/restaurante/:id"} component={Restaurante}/>
              
        </Switch>
    </BrowserRouter>
  )
}

export default Router;