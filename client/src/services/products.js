import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const resp = await api.get("/products");
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const resp = await api.get(`/products/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};
