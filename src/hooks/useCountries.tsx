import useSWR, { Fetcher } from 'swr';
import axios from 'axios';
import type { Country } from 'types';

const useCountries = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchCountries: Fetcher<Country[]> = async () =>
    axios.get(`${API_URL}`).then((res) => res.data);

  return useSWR('/countries/all', fetchCountries, {
    suspense: true,
  });
};

export default useCountries;
