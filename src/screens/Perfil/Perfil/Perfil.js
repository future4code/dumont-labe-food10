import React, { useContext, useEffect, useState } from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useHistory } from 'react-router-dom';
import { PerfilStyled, NameStyled, TituloStyled, InfoStyled, HistoricoStyled, EnderecoTituloStyled, EnderecoTextoStyled, EditarStyled, HistoricoContainer, LowerBar, LowerBarButton } from './styles';
import IconeEditar from '../../../assets/edit.svg';
import { useProtectPage } from '../../../hooks/useProtectPage';
import { goToEditAddress, goToEditProfile, goToFeed, goToCarrinho, goToProfile } from '../../../routes/coordinator';
import GlobalStateContext from '../../../context/GlobalStateContext';
import { HeaderStyled } from '../EditarCadastro/styles';
import { BASE_URL } from '../../../constants/apiConstants';
import axios from 'axios';
import HomeLogo from '../../../assets/home-logo.svg'
import CartLogo from '../../../assets/cart-logo.svg'
import Avatar from '../../../assets/active-avatar-logo.svg'

const Perfil = () => {
  useProtectPage();
  // const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  const [profile, setProfile] = useState({})
  const [ordersHistory, setOrdersHistory] = useState({})
  const token = localStorage.getItem("token");

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setProfile(response.data);
    })
    .catch(error => {
      console.log(error.message)
    });
  }

  const getOrdersHistory = () => {
    axios.get(`${BASE_URL}/orders/history`, {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setOrdersHistory(response.data);
    })
    .catch(error => {
      console.log(error.message)
    });
  }

  useEffect(() => {
    getProfile();
    getOrdersHistory()
  }, []);

  const onClickEditProfile = () => {
    goToEditProfile(history);
  }
  const onClickEditAddress = () => {
    goToEditAddress(history);
  }

  return(
    <PerfilStyled>
      <div>
      <HeaderStyled
        >
           <TituloStyled>Meu perfil</TituloStyled>
           </HeaderStyled>

        <InfoStyled background="none">
          <div>
            <div>
                <NameStyled>
                  { profile.user && profile.user.name }
                </NameStyled>
            </div>
            <div>
                <NameStyled>
                  { profile.user && profile.user.email }
                </NameStyled>
            </div>
            <div>
                <NameStyled>
                  { profile.user && profile.user.cpf }
                </NameStyled>
            </div>
          </div>
          <EditarStyled src={IconeEditar} alt="Botão editar"
            onClick={onClickEditProfile}
          />
        </InfoStyled>
        <InfoStyled>
          <div>
            <EnderecoTituloStyled>
              Endereço cadastrado
              {profile.user  && profile.user.address}
            </EnderecoTituloStyled>

            <EnderecoTextoStyled>
            {profile.user  && profile.user.address}
            </EnderecoTextoStyled>
          </div>

          <img
           src={IconeEditar} 
           alt="Botão editar"
           onClick={onClickEditAddress}
           />
        </InfoStyled>
        <HistoricoContainer>
          <HistoricoStyled>Histórico de pedidos</HistoricoStyled>

          { ordersHistory && ordersHistory.length ?
              <Pedido />
              :
              <p>Você não realizou nenhum pedido</p>
          }
        </HistoricoContainer>
      </div>
      <LowerBar>
          <LowerBarButton onClick={() => goToFeed(history)}><img src={HomeLogo} alt="Home Logo"/></LowerBarButton>
          <LowerBarButton onClick={() => goToCarrinho(history)}><img src={CartLogo} alt="Carrinho"/></LowerBarButton>
          <LowerBarButton onClick={() => goToProfile(history)}><img src={Avatar} alt="Avatar Logo"/></LowerBarButton>
        </LowerBar>
    </PerfilStyled>
    
  )
}
export default Perfil;
