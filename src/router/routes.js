import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products',
            name: 'Foods',
            component: Foods
        },
        {
            path: '/products/:uuid',
            name: 'FoodDetail',
            component: FoodDetail
        },
        {
            path: '/basket',
            name: 'Keranjang',
            component: Keranjang
        },
        {
            path: '/pesanan-sukses',
            name: 'PesananSukses',
            component: PesananSukses
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        // {
        //     path: "/",
        //     name: "Users",
        //     component: () => import("./components/Users"),
        // },
        // {
        //     path: "/users",
        //     name: "Users",
        //     component: () => import("./components/Users"),
        // },
        // {
        //     path: "/user/:id",
        //     name: "User",
        //     component: () => import("./components/User"),
        // },
    ]
});
	// e.GET("/products", controllers.FetchAllProduct)
	// e.GET("/products/:uuid", controllers.FetchProductByUuid)
	
    // e.POST("/products", controllers.StoreProduct)

	// e.GET("/basket", controllers.FetchActiveBasket)


	// e.POST("/basket/:uuid_product", controllers.StoreProductToBasket)
	// e.POST("/checkout", controllers.CheckoutBasketProduct)
export default router;