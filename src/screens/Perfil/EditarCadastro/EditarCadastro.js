import React from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import IconeEditar from '../../../assets/edit.svg';
import { Button, TextField, Typography } from '@material-ui/core';
import { TextFieldStyled, ButtonStyled, FormContainer } from './styles';
import { useProtectPage } from '../../../hooks/useProtectPage';
import { editProfile } from '../../../services/user';
import { goToBackPage } from '../../../routes/coordinator';
import BackIcon from '../../../assets/back.svg';

const EditarCadastro = () => {
  useProtectPage();

  const { form, onChange } = useForm({ name: "", email: "", cpf: ""});
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
          <div>
            <div onClick={onClickReturn}>
              <img src={BackIcon} />
            </div>
            <div>
                <Typography variant="p">Editar</Typography>
            </div>
          </div>

            <FormContainer
                onSubmit={onSubmitForm}
            >
                <TextFieldStyled
                name="name"
                variant="outlined"
                label="Nome*"
                value={form.nome}
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