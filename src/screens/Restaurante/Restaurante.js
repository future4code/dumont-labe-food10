import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { base_URL } from '../../constants/url/base_URL'
import ProductsCard from './ProductsCard'
import { CardDescription, CardDetails, ButtonDiv, Title, TitleContainer, ProductTitle } from './styles'

const Restaurante = () => {
  const history = useHistory()
  const pathParams = useParams()
  const [details, setDetails] = useState({})
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdxUW1VbDlCb0VKRGRRZDVjOXdUIiwibmFtZSI6IkFsdmFybyIsImVtYWlsIjoiYWx2YXJvQGxhYmUubnUiLCJjcGYiOiIxMjMuNDU2Ljc4OS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBTw6NvIEpvcmdlLCAxLCA3MSAtIEVzcGVyYW7Dp2EiLCJpYXQiOjE2MDc4ODk4ODN9.6I0Fc6pPvIpg96OtpUtHA7FL_zPHQRVKbAF136Ien-4"

  const getRestaurantDetails = () => {
    axios.get(`${base_URL}/restaurants/${pathParams.id}`, {
      headers: {
        auth: token
      }
    }).then(res => {
      setDetails(res.data.restaurant)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRestaurantDetails()
  }, [])

  return(
    <div>
      <TitleContainer>
        <ButtonDiv>
          <ArrowBackIos onClick={() => history.goBack()}/>
        </ButtonDiv>
        <Title>Restaurante</Title>
        <ButtonDiv></ButtonDiv>
      </TitleContainer>
      <Card style={{margin: "4px 16px"}}>
        <CardMedia 
          component="img"
          alt={details.name}
          image={details.logoUrl}
          title={details.name}
        />
        <CardContent>
          <CardDescription>
            <Typography style={{color: "#5cb646"}}>{details.name}</Typography>
            <Typography style={{color: "#b8b8b8"}}>{details.category}</Typography>
          </CardDescription>
          <CardDetails>
            <Typography style={{color: "#b8b8b8"}}>{details.deliveryTime} min</Typography>
            {details.shipping && 
              <Typography style={{color: "#b8b8b8"}}>Frete {details.shipping.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</Typography>
            }
          </CardDetails>
          <CardDescription>
            <Typography style={{color: "#b8b8b8"}}>{details.address}</Typography>
          </CardDescription>
        </CardContent>
      </Card>
      <ProductTitle>
        <p>Produtos</p>
      </ProductTitle>
      {details.products &&
        details.products.map(product => {
          return <ProductsCard 
                    key={product.id}
                    name={product.name}
                    image={product.photoUrl}
                    description={product.description}
                    price={product.price}/>
        })
      }
    </div>
  )
} 

export default Restaurante

               