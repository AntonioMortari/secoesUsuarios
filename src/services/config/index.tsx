import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proxy-intra.feagri.unicamp.br'
});

export { api };