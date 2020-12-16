import styled from 'styled-components'

export const TitleContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin: 0 0 8px 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  font-family: Roboto;
`

export const Title = styled.p`
  margin: 0 auto;
  padding: 14px 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`

export const ButtonDiv = styled.div`
  width: 40px;
  padding: 0 16px;
`

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin: 0px 16px 8px 16px;
  padding: 0 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`

export const Carousel = styled.div`
  margin-right: 16px;
  display: flex;
  overflow: auto;
  text-align: center;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const CarouselItem = styled.div`
  margin: 0 16px;
`

export const CarouselActiveItem = styled.p`
  color: #5cb646;
`

export const RestaurantsContainer = styled.div`
  margin-bottom: 55px;
`

export const LowerBar = styled.div`
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0px;
  box-shadow: 0 0 0.5px 0 rgba(0, 0, 0, 0.25);
`

export const LowerBarButton = styled.button`
  background: white;
  border: none;
  width: calc(100vw/3);
  height: 49px;
`

export const SearchMessage = styled.p`
  text-align: center;
`