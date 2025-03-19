import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../services/countriesService";

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
