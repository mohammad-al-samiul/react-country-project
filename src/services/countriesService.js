import axiosInstance from "../config/axios.config";

export const getCountriesData = async () => {
  const res = await axiosInstance.get("/all");
  return res.data;
};
