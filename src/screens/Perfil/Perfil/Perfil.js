import React, { useContext, useEffect } from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { PerfilStyled, NameStyled, TituloStyled, InfoStyled, HistoricoStyled, EnderecoTituloStyled, EnderecoTextoStyled, EditarStyled } from './styles';
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

const Perfil = () => {
  useProtectPage();
  const { states, setters, requests } = useContext(GlobalStateContext);
  // const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: ""});
  const history = useHistory();

  
  useEffect(() => {
    requests.getProfile();
    // requests.getOrdersHistory();
  }, []);
  // console.log(requests.getProfile);


  // }, [requests.getProfile, requests.getOrdersHistory]);

  // const onChangeForm = (event) => {
  //   const { value, name } = event.target;

  //   onChange(value, name);
  // }

  // const onSubmitForm = (event) => {
  //   event.preventDefault();

  //   signup(form, history);
  // }
  // const params = useParams();

  // const recipe = data[0];

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
        <div
        >

          <div>
            <TituloStyled>Meu perfil</TituloStyled>
          </div>
        </div>
        
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
              {profile.user && profile.user.hasAddress && profile.user.address}
            </EnderecoTituloStyled>

            <EnderecoTextoStyled>
              {profile.user && profile.user.hasAddress && profile.user.address}
            </EnderecoTextoStyled>
          </div>

          <img
           src={IconeEditar} 
           alt="Botão editar"
           onClick={onClickEditAddress}
           />
        </InfoStyled>

        <div>
          <HistoricoStyled>Histórico de pedidos</HistoricoStyled>
          
          { ordersHistory && ordersHistory.length ?
              <Pedido />
              :
              <p>Você não realizou nenhum pedido</p>
          }
        </div>
      </div>

      
      {/* <FormContainer
                onSubmit={onSubmitForm}
            >
                <TextFieldStyled
                name="name"
                variant="outlined"
                label="Nome*"
                value={form.name}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                name="email"
                variant="outlined"
                label="E-mail*"
                value={form.email}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="cpf"
                name="cpf"
                variant="outlined"
                label="CPF*"
                value={form.cpf}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="password"
                name="password"
                variant="outlined"
                label="Senha*"
                value={form.password}
                onChange={onChangeForm}
                />
                <ButtonStyled
                variant="contained"
                type="submit"
                color="primary"
                >
                    Cadastrar
                </ButtonStyled>
            </FormContainer> */}
    </PerfilStyled>
  )
}

export default Perfil;