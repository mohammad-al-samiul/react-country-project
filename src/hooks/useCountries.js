import { useEffect, useState, useTransition } from "react";
import {
  getCountriesData,
  getIndivCountryData,
} from "../services/countriesService";

export const useCountries = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(() => {
      const getCountries = async () => {
        try {
          const data = await getCountriesData();
          setCountries(data);
        } catch (err) {
          setError(err);
        }
      };
      getCountries();
    });
  }, []);
  return { countries, isPending, error };
};

export const useIndivCountry = (name) => {
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    if (!name) {
      return;
    }
    startTransition(() => {
      const getIndivCountry = async () => {
        try {
          const data = await getIndivCountryData(name);
          setCountry(data);
        } catch (err) {
          setError(err);
        }
      };
      getIndivCountry();
    });
  }, [name]);

  return { country, isPending, error };
};
