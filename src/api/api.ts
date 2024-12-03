import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = () =>
  axios.get(`${BASE_URL}/products`).then((res) => res.data);

export const getProductById = (id: string) =>
  axios.get(`${BASE_URL}/products/${id}`).then((res) => res.data);
