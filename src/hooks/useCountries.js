import { useEffect, useState } from "react";
import {
  getCountriesData,
  getIndivCountryData,
} from "../services/countriesService";

export const useCountries = () => {
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const getCountries = async () => {
      try {
        const data = await getCountriesData();
        setCountries(data);
        setIsPending(false);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    };
    getCountries();
  }, []);
  return { countries, isPending, error };
};

export const useIndivCountry = (name) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [country, setCountry] = useState();

  useEffect(() => {
    setIsPending(true);
    const getIndivCountry = async () => {
      try {
        const data = await getIndivCountryData(name);
        setCountry(data[0]);
        setIsPending(false);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    };
    getIndivCountry();
  }, [name]);

  return { country, isPending, error };
};
