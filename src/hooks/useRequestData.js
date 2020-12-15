import { useState } from 'react';
import axios from 'axios';

export function useRequestData(url, request, initialState) {
  const [ stateProfile, setProfile ] = useState(initialState);
  const [ stateAddress, setAddress ] = useState(initialState);
  const [ stateOrdersHistory, setOrdersHistory ] = useState(initialState);

  const getProfile = () => {
    const token = localStorage.getItem("token");
    axios.get(url, {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setProfile(response.data);
      console.log("Response " + response.data)
      console.log("URL " + url)
    })
    .catch(error => {
      console.log(error.message)
    });
  }

  const getOrdersHistory = () => {
    const token = localStorage.getItem("token");

    axios.get(url, {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setOrdersHistory(response.data);
      console.log("Response " + response.data)
      console.log("URL " + url)
    })
    .catch(error => {
      console.log(error.message)
      console.log(error.message)
    });
  }

  const getAddress = () => {
    // if (url === `${BASE_URL}/orders/history`){

    const token = localStorage.getItem("token");

    axios.get(url, {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setAddress(response.data);
      console.log("Response " + response.data)
      console.log("URL " + url)
    })
    .catch(error => {
      console.log(error.message)
      console.log(error.message)
    });
    // }
  }

  switch(request) {
    case "getOrdersHistory":
      return [stateProfile, setProfile, getProfile];
    case "getAddress":
      return [stateAddress, setAddress, getAddress];
    default:
    return [stateOrdersHistory, setOrdersHistory, getOrdersHistory];
  }
} 