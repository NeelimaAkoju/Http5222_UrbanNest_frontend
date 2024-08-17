import axios from 'axios';

const API_BASE_URL = 'http://localhost:5555/api';

const api = axios.create({
  baseURL: API_BASE_URL
});

export const getProducts = async (limit = null) => {
  try {
    const response = await api.get('/products', { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId, limit = 0) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${categoryId}/products`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for category ${categoryId}:`, error);
      throw error;
    }
  };

export const searchProducts = async (query) => {
  try {
    const response = await api.get('/products/search', { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};