import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

export const PerfilStyled = styled.div`
    letter-spacing: -0.39px;
    text-align: left;
    font-weight: 500;
    margin: 0;
`

export const TituloStyled = styled.h1`
font-size: 16px;
height: 18px;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
padding: 5px 0 15px;
font-weight: 500;
`

export const NameStyled = styled.p`
padding: 10px 10px 0 10px;
margin: 0;
height: 18px;
`

export const InfoStyled = styled.div`
margin: 16px 0;
padding: 18px;
background-color: ${props => props.background !== "none" && "#eeeeee"};
display: flex;
justify-content: space-between;
`

export const EnderecoTituloStyled = styled.h4`
color: #b8b8b8;
margin: 0;
font-weight: 400;
`

export const EnderecoTextoStyled = styled.p`
margin: 4px 0;
font-weight: 500;
`

export const HistoricoStyled = styled.h4`
font-weight: 500;
margin: 0;
padding: 0 0 7px 0;
border-bottom: solid 1px #000000;
`
export const EditarStyled = styled.img`
margin: 0 0 45px;
`
export const ButtonStyled = styled(Button)`
text-transform: capitalize;
margin: 10px 0;
`
export const TextFieldStyled = styled(TextField)`
    margin: 10px 0;

    span {
        margin: 0 5px 0 30px;
    }
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
`