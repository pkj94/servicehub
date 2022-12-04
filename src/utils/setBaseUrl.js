import axios from 'axios';

const setBaseUrl = (url) => {
    if (url) {
        axios.defaults.baseURL = url
    } else {
        delete axios.defaults.baseURL;
    }
}

export default setBaseUrl;