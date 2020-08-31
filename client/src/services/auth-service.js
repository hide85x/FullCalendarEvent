import axios from 'axios';


const url = 'http://localhost:3000/';

export default {
    login(user) {
        return axios
            .post(url + 'auth/login', user)
            .then(result => result)
    },
    signup(user) {
        return axios
            .post(url + 'user/add', user)
            .then(result => result)
    },
    getAllUsers(){
        return axios
            .get(url + 'user/all')
            .then(result=> result)
    }
}
