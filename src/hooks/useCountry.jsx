import axios from "axios";
import { useQuery } from "react-query";

const fetchCountry = async (countryId) => {
  return axios
    .get(`https://restcountries.com/v2/name/${countryId}?fullText=true`)
    .then((res) => res.data);
};

const useCountry = () => {
  return useQuery("country", fetchCountry);
};

export default useCountry;
