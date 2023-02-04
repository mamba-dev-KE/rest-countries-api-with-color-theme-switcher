import axios from "axios";
import { useQuery } from "react-query";

const fetchCountries = async () => {
  return axios.get(`https://restcountries.com/v2/all`).then((res) => res.data);
};

const useCountries = () => {
  return useQuery("countries", fetchCountries);
};

export default useCountries;
