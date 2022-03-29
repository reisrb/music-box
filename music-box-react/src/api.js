import axios from 'axios';

const api = axios.create({
  baseURL: "https://62423a5bb6734894c14e79bf.mockapi.io/music"
})

export default api;