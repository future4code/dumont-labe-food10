import React, { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { TextFieldStyled, ButtonStyled, FormContainer, TituloStyled, HeaderStyled, EditarStyled  } from './styles';
import { useProtectPage } from '../../../hooks/useProtectPage';
import { editProfile } from '../../../services/user';
import { goToBackPage } from '../../../routes/coordinator';
import BackIcon from '../../../assets/back.svg';
import GlobalStateContext from '../../../context/GlobalStateContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { BASE_URL } from '../../../constants/apiConstants';
import axios from 'axios';

const EditarCadastro = () => {
  useProtectPage();
  const [profile, setProfile] = useState({})
  const token = localStorage.getItem("token");
  const { form, onChange, setForm } = useForm({ name: "", email: "", cpf: "" });

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

  useEffect(() => {
    getProfile();
  }, [])

  useEffect(() => {
    const name = profile && profile.name;
    const email = profile && profile.email;
    const cpf = profile && profile.cpf;

    setForm({ name: name, email: email, cpf: cpf })
  }, [profile])

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