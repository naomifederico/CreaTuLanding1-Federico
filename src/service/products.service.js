import axios from 'axios';


const BASE_URL = 'https://dummyjson.com/products';

export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/products')
}

export async function getProductById(id) {
    return await axios.get(`${BASE_URL}/${id}`);
  }

  export async function getProductsByCategory(id){
    return await axios.get(`${BASE_URL}/category/${id}`);
  }

  export async function getAllCategories(){
    return await axios.get(`${BASE_URL}/categories`);
  }