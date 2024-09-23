import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://fakestoreapi.in/api/'
})

export const shopeAPI = {
    getAllProducts() {
        return instanse.get(`products?limit=20`)
    },
    getById(id: string) {
        return instanse.get(`products/${id}`)
    },
    getByCategory() {
        return instanse.get(`products/category`)
    },
    getProductByCategory(category: string) {
        return instanse.get(`products/category?type=${category}`)
    },
    getSort(category: string, pop: string) {
        return instanse.get(`products/category?type=${category}&sort=${pop}`)
    },
    getByPage(page: number) {
        return instanse.get(`products?page=${page}&limit=20`)
    },
    deleteProduct(id: string) {
        return instanse.delete(`products/${id}`)
    }
}