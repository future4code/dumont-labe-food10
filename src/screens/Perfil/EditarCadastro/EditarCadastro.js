import React, { useCallback } from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import IconeEditar from '../../../assets/edit.svg';
import { Button, TextField, Typography } from '@material-ui/core';
import { TextFieldStyled, ButtonStyled, FormContainer, TituloStyled, HeaderStyled, EditarStyled  } from './styles';
import { useProtectPage } from '../../../hooks/useProtectPage';
import { editProfile } from '../../../services/user';
import { goToBackPage } from '../../../routes/coordinator';
import BackIcon from '../../../assets/back.svg';
import GlobalStateContext from '../../../context/GlobalStateContext';
import { useEffect } from 'react';
import { useContext } from 'react';

const EditarCadastro = () => {
  useProtectPage();

  const { states, setters, requests } = useContext(GlobalStateContext);

  const { form, onChange, setForm } = useForm({ name: "", email: "", cpf: "" });

  useEffect(() => {
    requests.getProfile();
  }, [])

  console.log(states)
  useEffect(() => {
    const user = states.stateProfile.user;
    const name = user && user.name;
    const email = user && user.email;
    const cpf = user && user.cpf;

    setForm({ name: name, email: email, cpf: cpf })
    console.log(form)
  }, [states])

  const history = useHistory();

  const onChangeForm = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    editProfile(form, history);
  }
  
  const onClickReturn = () => {
    goToBackPage(history);
  }

  return(
      <div>
          <HeaderStyled>
            <div onClick={onClickReturn}>
              <EditarStyled src={BackIcon} />
            </div>
          
            <TituloStyled>Editar</TituloStyled>
          </HeaderStyled>

            <FormContainer
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
                type="email"
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
                <ButtonStyled
                variant="contained"
                type="submit"
                color="primary"
                >
                  Salvar  
                </ButtonStyled>
            </FormContainer>
      </div>
  )
}
export default EditarCadastro;