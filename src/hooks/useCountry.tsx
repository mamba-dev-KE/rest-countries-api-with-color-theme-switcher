import axios from "axios";

const fetchCountry = async (countryId: string) => {
  return axios
    .get(`https://restcountries.com/v2/name/${countryId}?fullText=true`)
    .then((res) => res.data);
};

const useCountry = () => {
  return fetchCountry
  // return useQuery("country", fetchCountry);
};

export default useCountry;
