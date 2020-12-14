import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeLogo from '../../assets/home-logo.svg'
import CartLogo from '../../assets/active-cart-logo.svg'
import Avatar from '../../assets/avatar-logo.svg'
import { AdressContainer, AdressP, Title, TitleContainer } from './styles'
import { base_URL } from '../../constants/url/base_URL'
import { LowerBar, LowerBarButton } from '../Home/styles'
import { goToCarrinho, goToFeed, goToPerfil } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { ProductTitle } from '../Restaurante/styles'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'

const CarrinhoItem = () => {
  const history = useHistory()
  const [adress, setAdress] = useState({})
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdxUW1VbDlCb0VKRGRRZDVjOXdUIiwibmFtZSI6IkFsdmFybyIsImVtYWlsIjoiYWx2YXJvQGxhYmUubnUiLCJjcGYiOiIxMjMuNDU2Ljc4OS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBTw6NvIEpvcmdlLCAxLCA3MSAtIEVzcGVyYW7Dp2EiLCJpYXQiOjE2MDc4ODk4ODN9.6I0Fc6pPvIpg96OtpUtHA7FL_zPHQRVKbAF136Ien-4"

  const getAdress = () => {
    axios.get(`${base_URL}/profile/address`, {
      headers: {
        auth: token
      }
    }).then(res => {
      setAdress(res.data.address)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAdress()
  }, [])

  return(
    <div>
      <TitleContainer>
        <Title>Meu Carrinho</Title>
      </TitleContainer>
      <AdressContainer>
        <AdressP>Endereço de entrega</AdressP>
        <p>{adress.street}, {adress.number}</p>
      </AdressContainer>
      <ProductTitle>
        <p>Produtos</p>
      </ProductTitle>
      <FormControl component="fieldset">
        <RadioGroup>
          <FormControlLabel value="Dinheiro" control={<Radio style={{color: "#5cb646"}} />} label="Dinheiro"/>
          <FormControlLabel value="Cartão de Crédito" control={<Radio style={{color: "#5cb646"}}/>} label="Cartão de Crédito"/>
        </RadioGroup>
      </FormControl>
      <LowerBar>
        <LowerBarButton onClick={() => goToFeed(history)}><img src={HomeLogo} alt="Home Logo"/></LowerBarButton>
        <LowerBarButton onClick={() => goToCarrinho(history)}><img src={CartLogo} alt="Carrinho"/></LowerBarButton>
        <LowerBarButton onClick={() => goToPerfil(history)}><img src={Avatar} alt="Home Logo"/></LowerBarButton>
      </LowerBar>
    </div>
  )
}

export default CarrinhoItem