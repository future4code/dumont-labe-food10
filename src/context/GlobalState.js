import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/apiConstants';
import { useRequestData } from '../hooks/useRequestData';

const GlobalState = (props) => {
  const [cart, setCart] = useState([])

  const data = { cart, setCart };
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;