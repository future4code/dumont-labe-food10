import styled from 'styled-components';

export const PerfilStyled = styled.div`
    letter-spacing: -0.39px;
    text-align: left;
    font-weight: 500;
    margin: 0;
`

export const TituloStyled = styled.div`
font-size: 16px;
text-align: center;
font-weight: 500;
position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
`

export const NameStyled = styled.p`
margin: 0;
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
display: block;
`
export const HeaderStyled = styled.div`
display: flex;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
align-items: center;
padding: 0 20px;
height: 50px;
`
export const HistoricoContainer = styled.div`
margin: 20px;
`