import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCountries = async () => {
  return axios.get(`https://restcountries.com/v2/all`).then((res) => res.data);
};

const useCountries = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchCountries = async () =>
    axios.get(`${API_URL}`).then((res) => res.data);

  return useQuery(['countries'], fetchCountries);
};

export default useCountries;
