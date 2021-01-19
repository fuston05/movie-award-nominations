// ** AXIOS REQUESTS HERE **

import axios from "axios";

export {
  fetchData,
}

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const key = process.env.REACT_APP_API_KEY;

const fetchData = (page, searchTerm) => {
  let url = `${baseUrl}/?key=${key}&s=${searchTerm}&page=${page || 1}}`;
  return axios(url);
}