import axiosInstance from "../config/axios.config";

export const getCountriesData = async () => {
  const res = await axiosInstance.get(
    "/all?fields=name,population,region,capital,flags"
  );
  return res.data;
};

export const getIndivCountryData = async (name) => {
  const res = await axiosInstance.get(
    `/name/${name}?fullText=true&fields=name,population,region,capital,flags,tld,currencies,language,borders`
  );
  return res.data;
};
