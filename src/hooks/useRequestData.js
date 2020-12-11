import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';

export function useRequestData(url, request, initialState) {
    const [ stateProfile, setProfile ] = useState(initialState);
    const [ stateAddress, setAddress ] = useState(initialState);
    const [ stateOrdersHistory, setOrdersHistory ] = useState(initialState);

        const getProfile = () => {
    // if (url === `${BASE_URL}/profile`){

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
        // }
    }

    const getOrdersHistory = () => {
        // if (url === `${BASE_URL}/orders/history`){

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
        // }
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

    // useCallback(() => {
    //     getProfile()
    // }, [getProfile])
    
    // useEffect(() => {
    //     getProfile()
    //     getOrdersHistory()
    // }, []);
    // console.log("getOrdersHistory " + getOrdersHistory)
    // console.log("stateOrdersHistory " + stateOrdersHistory)

    // console.log(stateProfile)
    // console.log(setProfile)
    // console.log(getProfile)
    switch(request) {
        case "getOrdersHistory":
            return [stateProfile, setProfile, getProfile];
            break;
        case "getAddress":
            return [stateAddress, setAddress, getAddress];
            break;
        default:
        return [stateOrdersHistory, setOrdersHistory, getOrdersHistory];
    }
    // return [stateProfile, setProfile, getProfile, stateOrdersHistory, setOrdersHistory, getOrdersHistory];
}