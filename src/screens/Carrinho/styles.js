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

export const AdressContainer = styled.div`
  width: calc(100vw - 32px);
  padding: 8px 16px;
  background-color: #eeeeee;
  text-align: left;
`

export const AdressP = styled.p`
  color: #b8b8b8;
`

export const ProductTitle = styled.div`
  border-bottom: solid 1pt black;
  margin: 0 16px;
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