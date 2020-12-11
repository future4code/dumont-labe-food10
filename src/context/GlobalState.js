import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/apiConstants';
import { useRequestData } from '../hooks/useRequestData';
import axios from 'axios';

const GlobalState = (props) => {
    // const [ stateProfile, setProfile ] = useState([]);
    // const [ stateOrdersHistory, setOrdersHistory ] = useState([]);

    // const [ getProfile ] = useRequestData(`${BASE_URL}/orders/history`, []);
    const getProfileRequest = "getProfile";
    const getAddressRequest = "getAddress";
    const getOrdersHistoryRequest = "getOrdersHistory";

    const [ stateProfile, setProfile, getProfile ] = useRequestData(`${BASE_URL}/profile`, getProfileRequest, []);
    const [ stateAddress, setAddress, getAddress ] = useRequestData(`${BASE_URL}/profile/address`, getAddressRequest, []);
    const [ stateOrdersHistory, setOrdersHistory, getOrdersHistory ] = useRequestData(`${BASE_URL}/orders/history`, getOrdersHistoryRequest,[]);

    const token = localStorage.getItem("token");
    // console.log(stateProfile);
    
    // const getProfile = () => {
        
    //     // axios
    //     //     .get(`${BASE_URL}/profile`, {
    //     //         headers: {
    //     //             auth: token
    //     //         }
    //     //     })
    //     //     .then(response => {
    //     //         setProfile(response.data);
    //     //     })
    //     //     .catch(error => {
    //     //         alert(error.message)
    //     //     });
    // }

    // const getOrdersHistory = () => {
    //     axios.get(`${BASE_URL}/orders/history`, {
    //         headers: {
    //             auth: token
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data)
    //         setOrdersHistory(response.data);
    //     })
    //     .catch(error => {
    //         alert(error.message)
    //     });
    // }
    
    const states = { stateProfile, stateOrdersHistory, stateAddress }
    const setters = { setProfile, setOrdersHistory, setAddress }
    const requests = { getProfile, getOrdersHistory, getAddress }
    // console.log(requests.getProfile);
    // console.log(states.stateProfile);

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;