import axios from 'axios'

const API_URL = 'http://localhost:9080'

class ProductDataService {

    retrieveAllProducts(foodName) {

        return axios.get(`${API_URL}/products?nama_makanan=`+foodName);
    }

    retrieveProductsRecomendation() {

        return axios.get(`${API_URL}/products/recomendation`);
    }

    retrieveProduct(uuid) {

        return axios.get(`${API_URL}/products/${uuid}`);
    }

    // deleteUser(id) {

    //     return axios.delete(`${API_URL}/users/${id}`);
    // }

    // updateUser(id, user) {

    //     return axios.put(`${API_URL}/users/${id}`, user);
    // }

    // createProduct(product) {

    //     return axios.post(`${API_URL}/products`, product);
    // }   
}
	// e.GET("/products", controllers.FetchAllProduct)
	// e.GET("/products/:uuid", controllers.FetchProductByUuid)
	// e.POST("/products", controllers.StoreProduct)
export default new ProductDataService()