import axios from 'axios'

const API_URL = 'http://localhost:9080'

class ProductDataService {

    getActiveBaskets() {
        return axios.get(`${API_URL}/basket`);
    }

    retrieveProduct(uuid) {

        return axios.get(`${API_URL}/products/${uuid}`);
    }

    checkOut(form) {
        return axios.post(`${API_URL}/checkout`, form);
    }

    // updateUser(id, user) {

    //     return axios.put(`${API_URL}/users/${id}`, user);
    // }

    addProductToBasket(uuid, detail) {
        return axios.post(`${API_URL}/basket/${uuid}`, detail);
    }   
}
	// e.POST("/checkout", controllers.CheckoutBasketProduct)

		// e.POST("/basket/:uuid_product", controllers.StoreProductToBasket)
	// e.DELETE("/basket/:uuid_product", controllers.DeleteProductToBasket)
export default new ProductDataService()