import axios from 'axios';

const api = axios.create({ 
    baseURL: process.env.REACT_APP_NOTE
});

export default api;



//COLA para desenvolvimento local chamando a API: const api = axios.create({ baseURL:'https://notes-api-dac.herokuapp.com'});