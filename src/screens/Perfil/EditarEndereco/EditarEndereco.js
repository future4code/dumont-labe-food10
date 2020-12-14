import React, { useEffect, useContext } from 'react';
import Pedido from '../../../components/Pedido/Pedido';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import IconeEditar from '../../../assets/edit.svg';
import { Button, TextField, Typography } from '@material-ui/core';
import { TextFieldStyled, ButtonStyled, FormContainer, EditarEnderecoStyled, TituloStyled, HeaderStyled, EditarStyled } from './styles';
import { editAddress } from '../../../services/user';
import { goToBackPage } from '../../../routes/coordinator';
import BackIcon from '../../../assets/back.svg';
import GlobalStateContext from '../../../context/GlobalStateContext';


const EditarEndereco = () => {
  const { form, onChange, setForm } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});
  const history = useHistory();

  const { states, setters, requests } = useContext(GlobalStateContext);
  useEffect(() => {
    requests.getAddress();
  }, [])

  useEffect(() => { 

    const address = states.stateAddress.address;
    const neighbourhood = address && address.neighbourhood;
    const number = address && address.number;
    const city = address && address.city;
    const complement = address && address.complement;
    const state = address && address.state;
    const street = address && address.street;

    setForm({ street: street, number: number, neighbourhood: neighbourhood, city: city, state: state, complement: complement })
    console.log(form)
  }, [states])
  console.log(states)

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
      </div>
  )
}

export default EditarEndereco;