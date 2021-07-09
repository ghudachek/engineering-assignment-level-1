import { API_BASE_URL } from "../constants";
import axios from "axios";
export const getProducts = async () => {
  try {
    const resp = await axios.get(`${API_BASE_URL}/products`);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const resp = await axios.get(`${API_BASE_URL}/products/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};
