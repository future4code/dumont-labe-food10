import React from 'react'
import styled from 'styled-components'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { goToRestaurante } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardDescription = styled.div`
  text-align: left;
`

const FeedCard = (props) => {
  const history = useHistory()
  return(
    <Card style={{margin: "4px 16px"}} onClick={() => goToRestaurante(history, props.id)}>
      <CardActionArea>
        <CardMedia 
          component="img"
          alt={props.name}
          image={props.logoUrl}
          title={props.name}
        />
        <CardContent>
          <CardDescription>
            <Typography style={{color: "#5cb646"}}>{props.name}</Typography>
          </CardDescription>
          <CardDetails>
            <Typography style={{color: "#b8b8b8"}}>{props.deliveryTime} min</Typography>
            <Typography style={{color: "#b8b8b8"}}>{props.shipping.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</Typography>
          </CardDetails>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FeedCard