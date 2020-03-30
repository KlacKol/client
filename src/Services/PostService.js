import axios from 'axios';
import LocalStorageService from "./LocalStorageService";

class PostServiceClass {

    api = process.env.REACT_APP_API_URL;

    AddPost(data) {
        return axios.post(`${this.api}/client/twit`, data);
    }

    getPosts() {
        const userId = localStorage.getItem('user_id');
        return axios.get(`${this.api}/client/twit/${userId}`)
    }

    removePost(id) {
        return axios.delete(`${this.api}/client/twit/${id}`)
    }


}

let PostService = new PostServiceClass();

export {
    PostService
};