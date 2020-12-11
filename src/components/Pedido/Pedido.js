import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { PedidoStyled, PedidoDataStyled, PedidoValorStyled, PedidoTituloStyled } from './styles';

const Pedido = () => {
  return (
      <PedidoStyled>
        <PedidoTituloStyled>Bullguer Vila Madalena</PedidoTituloStyled>
        <PedidoDataStyled>23 outubro 2019</PedidoDataStyled>
        <PedidoValorStyled>Subtotal R$67,00</PedidoValorStyled>
      </PedidoStyled>
  )
}

export default Pedido;