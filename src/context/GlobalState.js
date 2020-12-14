import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/apiConstants';
import { useRequestData } from '../hooks/useRequestData';
import axios from 'axios';

const GlobalState = (props) => {
  const getProfileRequest = "getProfile";
  const getAddressRequest = "getAddress";
  const getOrdersHistoryRequest = "getOrdersHistory";

  const [ stateProfile, setProfile, getProfile ] = useRequestData(`${BASE_URL}/profile`, getProfileRequest, []);
  const [ stateAddress, setAddress, getAddress ] = useRequestData(`${BASE_URL}/profile/address`, getAddressRequest, []);
  const [ stateOrdersHistory, setOrdersHistory, getOrdersHistory ] = useRequestData(`${BASE_URL}/orders/history`, getOrdersHistoryRequest,[]);

  const token = localStorage.getItem("token");

  const states = { stateProfile, stateOrdersHistory, stateAddress }
  const setters = { setProfile, setOrdersHistory, setAddress }
  const requests = { getProfile, getOrdersHistory, getAddress }

  const data = { states, setters, requests };
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;