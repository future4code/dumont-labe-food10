import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin, goToProfile } from '../routes/coordinator';

export const useUnprotectPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            goToProfile(history);
        }
    }, [history]);
} 