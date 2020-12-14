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

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardDescription = styled.div`
  text-align: justify;
`

export const ProductTitle = styled.div`
  border-bottom: solid 1pt black;
  margin: 0 16px;
`

export const ProductContainer = styled.div`
  display: flex;
  height: 112px;
  margin: 16px;
`

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 92px;
  overflow: hidden;
  border: solid 1px #b8b8b8;
  border-right: none;
  border-radius: 5px 0 0 5px;
`

export const ProductImage = styled.img`
height: 112px;
`

export const ProductDescription = styled.div`
  width: calc(100% - 92px);
  border: solid 1px #b8b8b8;
  border-left: none;
  border-radius: 0 5px 5px 0;
  padding-left: 5px;
  position: relative;
`

export const ProductName = styled.p`
  color: #5cb646;
  margin: 12px;
`

export const DescriptionContainer = styled.div`
  height: 30px;
  margin: 0;
  padding: 0;
  padding-left: 5px;
`

export const Description = styled.p`
  font-size: 12px;
  color: #b8b8b8;
  margin: 0;
`

export const ProductPrice = styled.p`
  margin: 12px;
`

export const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: none;
  border: solid 1px #5cb646;
  border-radius: 5px 0 5px 0;
  color: #5cb646;
  font-size: 12px;
  width: 90px;
  height: 30px;
`