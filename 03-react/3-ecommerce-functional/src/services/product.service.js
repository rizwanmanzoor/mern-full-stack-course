import api from "@/lib/axios";

// Fetch all products from the API
export async function getProducts() {
   let { data } = await api.get("/");
   return data;
}

// Fetch all categories from the API
export async function getCategories() {
    let data = await api.get("/categories");
    return data;
}

// Fetch a single product by its ID from the API
export async function getProductById(id) {
    let { data } = await api.get(`/${id}`);
    return data;
}

// Fetch trending products from the API
export async function getTrendingProducts() {
    let { data } = await api.get(`/?limit=8&skip=155`);
    return data;
}