import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://tinder-ser.herokuapp.com/',
});

export default instace;