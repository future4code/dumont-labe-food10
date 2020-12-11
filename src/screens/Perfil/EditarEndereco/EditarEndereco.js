import React from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import IconeEditar from '../../../assets/edit.svg';
import { Button, TextField, Typography } from '@material-ui/core';
import { TextFieldStyled, ButtonStyled, FormContainer, EditarEnderecoStyled, TituloStyled } from './styles';
import { editAddress } from '../../../services/user';
import { goToBackPage } from '../../../routes/coordinator';
import BackIcon from '../../../assets/back.svg';


const EditarEndereco = () => {
  const { form, onChange } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});
  const history = useHistory();

  const onChangeForm = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log(form)
    editAddress(form, history);
  }

  const onClickReturn = () => {
    goToBackPage(history);
  }
  
  return(
      <EditarEnderecoStyled>
          <div>
            <div onClick={onClickReturn}>
              <img src={BackIcon} />
            </div>
            <TituloStyled>
                <Typography variant="subtitle1">Editar</Typography>
            </TituloStyled>
          </div>

            <FormContainer
                onSubmit={onSubmitForm}
            >
                <TextFieldStyled
                name="street"
                variant="outlined"
                label="Logradouro*"
                value={form.street}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="number"
                name="number"
                variant="outlined"
                label="Numero*"
                value={form.number}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="number"
                name="complement"
                variant="outlined"
                label="Complemento*"
                value={form.complement}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                name="neighbourhood"
                variant="outlined"
                label="Bairro*"
                value={form.neighbourhood}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="city"
                name="city"
                variant="outlined"
                label="Cidade*"
                value={form.city}
                onChange={onChangeForm}
                />
                <TextFieldStyled
                type="state"
                name="state"
                variant="outlined"
                label="Estado*"
                value={form.state}
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
      </EditarEnderecoStyled>
  )
}

export default EditarEndereco;