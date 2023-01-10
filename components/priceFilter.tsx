import { useEffect, useMemo, useState } from "react"
import { Filter, Product } from "../types"


type Props ={
    onChange:(filter:Filter)=>void
}


const PriceFilter:React.FC<Props> = ({onChange}) =>{
    const [min,setMin] = useState<number>(0)
    const [max,setMax] = useState<number>(1000)

    function handleChanceMin  (value:number){
        setMin(value)
        onChange(value ?(product)=>product.price>=value && product.price<=max : null)
    }
    function handleChanceMax  (value:number){
        setMax(value)
        onChange(value ?(product)=> product.price>=min && product.price < value : null)
    }

    console.log(min)
    return (
        <div style={{border:"1px solid white", borderRadius:"8px",display:"flex",padding:12,flexDirection:"column",gap:12, width:"250px",marginLeft:20}}>
            <ul style={{padding:12}}>
                <li style={{listStyle:"none"}} >
                    <label style={{color:"#fff",display:"flex",gap:12}}>
                        Minimo:
                        <input 
                        style={{width:100}}
                        onChange={(es)=>handleChanceMin(Number(es.target.value))}
                        type="number" 
                        name="price" 
                        value={min} />
                    </label>
                </li>

                <li style={{listStyle:"none"}} >
                    <label style={{color:"#fff",display:"flex",gap:12}}>
                        Maximo:
                        <input 
                        style={{width:100}}
                        onChange={(es)=>handleChanceMax(Number(es.target.value))}
                        type="number" 
                        name="color" 
                        value={max} />
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default PriceFilter