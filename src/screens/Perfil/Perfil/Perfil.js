import React, { useContext, useEffect } from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { PerfilStyled, NameStyled, TituloStyled, InfoStyled, HistoricoStyled, EnderecoTituloStyled, EnderecoTextoStyled, EditarStyled, HistoricoContainer } from './styles';
import IconeEditar from '../../../assets/edit.svg';
import { Button, TextField, Typography } from '@material-ui/core';
import { TextFieldStyled, ButtonStyled, FormContainer, EditarEnderecoStyled } from '../EditarEndereco/styles';
import { signup } from '../../../services/user';
import { useRequestData } from '../../../hooks/useRequestData';
import { useProtectPage } from '../../../hooks/useProtectPage';
import { BASE_URL } from '../../../constants/apiConstants';
import { goToEditAddress, goToEditProfile, goToBackPage } from '../../../routes/coordinator';
import GlobalState from '../../../context/GlobalState';
import GlobalStateContext from '../../../context/GlobalStateContext';
import { HeaderStyled } from '../EditarCadastro/styles';

const Perfil = () => {
  useProtectPage();
  const { states, setters, requests } = useContext(GlobalStateContext);
  // const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: ""});
  const history = useHistory();

  useEffect(() => {
    requests.getProfile();
  }, []);

  const onClickEditProfile = () => {
    goToEditProfile(history);
  }
  const onClickEditAddress = () => {
    goToEditAddress(history);
  }
  const profile = states.stateProfile;
  // console.log(profile)
  const ordersHistory = states.ordersHistory;
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
    </PerfilStyled>
  )
}
export default Perfil;
