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
    }
}