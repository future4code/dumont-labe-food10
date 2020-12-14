import React from 'react'
import { AddButton, Description, DescriptionContainer, ProductContainer, ProductDescription, ProductImage, ProductImageContainer, ProductName, ProductPrice } from './styles'

const ProductsCard = (props) => {
  return(
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage src={props.image} alt="Foto"/>
      </ProductImageContainer>
      <ProductDescription>
        <ProductName>{props.name}</ProductName>
        <DescriptionContainer>
          <Description>{props.description}</Description>
        </DescriptionContainer>
        <ProductPrice>{props.price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</ProductPrice>
        <AddButton>adicionar</AddButton>
      </ProductDescription>
    </ProductContainer>
  )
}

export default ProductsCard