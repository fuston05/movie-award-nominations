// ** AXIOS REQUESTS HERE **

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const key = process.env.REACT_APP_API_KEY;

const fetchData = (searchTerm, page) => {
  let url = `${baseUrl}/?apikey=${key}&s=${searchTerm}&page=${page || 1}}`;
  return axios(url);
};

export { fetchData };
