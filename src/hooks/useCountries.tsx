import axios from 'axios';

const fetchCountries = async () => {
  return axios.get(`https://restcountries.com/v2/all`).then((res) => res.data);
};

const useCountries = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchCountries = async () =>
    axios.get(`${API_URL}`).then((res) => res.data);

    return fetchCountries

  // return useQuery(['countries'], fetchCountries);
};

export default useCountries;
