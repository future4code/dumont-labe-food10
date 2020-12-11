import { BASE_URL } from '../constants/apiConstants';
import axios from 'axios';
import { goToEditAddress, goToProfile } from '../routes/coordinator';

const token = localStorage.getItem("token");

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token);
        goToProfile(history);
    })
    .catch(error => {
        console.log(error.message);
    })
}

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.token);
        goToEditAddress(history);
    })
    .catch(error => {
        console.log(error.message);
    })
}

export const editAddress = (body, history) => {
    axios.put(`${BASE_URL}/address`, body,
        {
            headers: {
                auth: token
            }
        }
    )
    .then(response => {
        console.log(response)
        console.log(body)
        localStorage.setItem("token", response.data.token)
        goToProfile(history);
    })
    .catch(error => {
        console.log(error.message);
    })
}

export const editProfile = (body, history) => {
    axios.put(`${BASE_URL}/profile`, body, {
        headers: {
            auth: token
        }
    })
    .then(response => {
        console.log(response)
        localStorage.getItem("token");
        goToProfile(history);
    })
    .catch(error => {
        console.log(error.message);
    })
}