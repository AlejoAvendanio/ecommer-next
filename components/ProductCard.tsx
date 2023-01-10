import { Product } from "../types"

type Props ={
    product:Product
}

const ProductCard:React.FC<Props> = ({product}) =>{
    return (
        <div style={{border:"1px solid white", borderRadius:"8px"}}>
            <h3 style={{color:"#fff",margin:10}}>{product.name}</h3>
            <img style={{width:"400px"}} src={product.image}/>
            <p style={{color:"#fff",marginTop:10}}>Price: {product.price.toLocaleString("es-AR",{style:"currency",currency:"ARS"})}</p>
            <p style={{color:"#fff"}}>Valoration:{"★".repeat(product.rating).padEnd(5,"☆")}</p>
        </div>
    )
}

export default ProductCard