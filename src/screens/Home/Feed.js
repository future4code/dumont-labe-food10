import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import FeedCard from './FeedCard'
import HomeLogo from '../../assets/active-home-logo.svg'
import CartLogo from '../../assets/cart-logo.svg'
import Avatar from '../../assets/avatar-logo.svg'
import { useHistory } from 'react-router-dom'
import { goToCarrinho, goToFeed, goToProfile, goToSearchResults } from '../../routes/coordinator'
import { Carousel, CarouselActiveItem, CarouselItem, LowerBar, LowerBarButton, RestaurantsContainer, SearchInput, Title, TitleContainer } from './styles'
import { base_URL } from '../../constants/url/base_URL'

const Feeds = () => {
  const history = useHistory()
  const [restaurants, setRestaurants] = useState()
  const [category, setCategory] = useState("")
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1ScUlYb0J5c1U1RU9iYWVoUG9vIiwibmFtZSI6IkFsdmFybyIsImVtYWlsIjoiYWx2YXJvQGxhYmUubnUiLCJjcGYiOiIxMjMuNDU2Ljc4OS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBTw6NvIEpvcmdlLCAxLCA3MSAtIEVzcGVyYW7Dp2EiLCJpYXQiOjE2MDc2MjQ4NDd9.K8DCZ_D4UuOG_aDT4QRkgTcT4_ZfjAQsbNKiKoh40KM"

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

  const categories = restaurants && 
  restaurants.map(restaurant => {
    return restaurant.category
  }).reduce((unico, item) => {
    return unico.includes(item) ? unico : [...unico, item]
  }, []);

  const categorizedRestaurants = restaurants &&
  restaurants.filter(restaurant => {
    return restaurant.category.includes(category)
  })

  const handleCategoryClick = (item) => {
    setCategory(item)
  }

    return(
      <div>
        <TitleContainer>
          <Title>FutureEats</Title>
        </TitleContainer>
        <SearchInput 
          onClick={() => goToSearchResults(history)}>
          <Search 
            style={{color: "gray"}}
          />
          <InputBase 
            placeholder="Restaurante"
            color="inherit"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchInput>
        <Carousel>
          {categories && 
            categories.map(itemCategory => {
              return <CarouselItem onClick={() => handleCategoryClick(itemCategory)} key={itemCategory}>
                {itemCategory === category ? <CarouselActiveItem>{itemCategory}</CarouselActiveItem> : <p>{itemCategory}</p>}
              </CarouselItem>
            })}
        </Carousel>
        <RestaurantsContainer>
          {categorizedRestaurants &&
            categorizedRestaurants.map(restaurant => {
              return <FeedCard 
                        key={restaurant.id}
                        id={restaurant.id}
                        logoUrl={restaurant.logoUrl}
                        name={restaurant.name}
                        deliveryTime={restaurant.deliveryTime}
                        shipping={restaurant.shipping}/>
            })}
        </RestaurantsContainer>
        <LowerBar>
          <LowerBarButton onClick={() => goToFeed(history)}><img src={HomeLogo} alt="Home Logo"/></LowerBarButton>
          <LowerBarButton onClick={() => goToCarrinho(history)}><img src={CartLogo} alt="Carrinho"/></LowerBarButton>
          <LowerBarButton onClick={() => goToProfile(history)}><img src={Avatar} alt="Home Logo"/></LowerBarButton>
        </LowerBar>
      </div>
    )
} 

export default Feeds