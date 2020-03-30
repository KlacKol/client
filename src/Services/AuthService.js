import axios from 'axios';

class AuthServiceClass {

    api = process.env.REACT_APP_API_URL;

    SignIn(data) {
        return axios.post(`${this.api}/auth/login`, data);
    }

    SignUp(data) {
        return axios.post(`${this.api}/auth/register`, data)
    }


}

let AuthService = new AuthServiceClass();

export {
    AuthService
};