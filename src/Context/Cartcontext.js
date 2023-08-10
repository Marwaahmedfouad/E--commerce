import axios from "axios";
import { createContext } from "react";
export let cartContext = createContext();
export function CartContextProvider(props) {
    let headers = {
        token: localStorage.getItem('userToken')
    }
    function addtocart(x) {
        return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
            { productId: x },
            { headers: headers })
            .then((response) => response)
            .catch((err) => console.log(err))
    }


    function getLoggedUserCart(x) {
        return axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
            { headers: headers })
            .then((response) => response)
            .catch((err) => console.log(err))
    }


    function removeItem(productid) {
        return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productid}`,
            { headers: headers })
            .then((response) => response)
            .catch((err) => console.log(err))
    }


    function updateproduct(productid, count) {
        return axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productid}`,
            { count: count },
            { headers: headers })
            .then((response) => response)
            .catch((err) => console.log(err))
    }
    return <cartContext.Provider value={{ addtocart, getLoggedUserCart, removeItem, updateproduct }}>
        {props.children}
    </cartContext.Provider>
}