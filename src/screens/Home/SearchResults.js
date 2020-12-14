import { InputBase } from '@material-ui/core'
import { ArrowBackIos, Search } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { base_URL } from '../../constants/url/base_URL'
import { useProtectPage } from '../../hooks/useProtectPage'
import FeedCard from './FeedCard'
import { ButtonDiv, SearchInput, SearchMessage, Title, TitleContainer } from './styles'

const SearchResults = () => {
  useProtectPage()
  const history = useHistory()
  const [restaurants, setRestaurants] = useState()
  const [search, setSearch] = useState("")
  const token = localStorage.getItem("token")

  const getRestaurants = () => {
    axios.get(`${base_URL}/restaurants`, {
      headers: {
        auth: token
      }
    }).then(res => {
      setRestaurants(res.data.restaurants)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredRestaurants = restaurants && 
    restaurants.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

  return(
    <div>
      <TitleContainer>
        <ButtonDiv>
          <ArrowBackIos onClick={() => history.goBack()}/>
        </ButtonDiv>
        <Title>Busca</Title>
        <ButtonDiv></ButtonDiv>
      </TitleContainer>
      <SearchInput>
        <Search 
          style={{color: "gray"}}
        />
        <InputBase 
          placeholder="Restaurante"
          color="inherit"
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={handleChange}
        />
      </SearchInput>
      <div>
        {search ? 
          (filteredRestaurants.length ?
          filteredRestaurants.map(restaurant => {
            return <FeedCard 
                      key={restaurant.id}
                      logoUrl={restaurant.logoUrl}
                      name={restaurant.name}
                      deliveryTime={restaurant.deliveryTime}
                      shipping={restaurant.shipping}/> 
          }) :<SearchMessage>Não encontramos!</SearchMessage>): <SearchMessage>Busque por nome de restaurante</SearchMessage>}
      </div>
    </div>
  )
}

export default SearchResults