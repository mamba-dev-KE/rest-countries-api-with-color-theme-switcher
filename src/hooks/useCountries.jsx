import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useCountries = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchCountries = async () =>
    axios.get(`${API_URL}`).then((res) => res.data);

  return useQuery(['countries'], fetchCountries);
};

export default useCountries;
