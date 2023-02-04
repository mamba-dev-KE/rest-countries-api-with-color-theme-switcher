import axios from 'axios';
import useSWR from 'swr'

const useCountries = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchCountries = async () =>
    axios.get(`${API_URL}`).then((res) => res.data);

  return useSWR('/countries/all', fetchCountries, {
    suspense: true
  });
};

export default useCountries;
