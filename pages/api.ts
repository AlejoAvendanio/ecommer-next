import { Product } from "../types"



const api = {
    product:{
        list:async():Promise<Product[]> =>{
            const data = await fetch("http://api.devtoolstech.in/ecommerce/products")
            .then(response=>response.json())
            .catch(e=> console.log(e))
            return data
        }
    }
}



export default api