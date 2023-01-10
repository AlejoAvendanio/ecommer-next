import { useEffect, useMemo, useState } from "react"
import { Filter, Product } from "../types"


type Props ={
    products:Product[],
    onChange:(filter:Filter)=>void
}


const ColorFilter:React.FC<Props> = ({products,onChange}) =>{
    const [state, setState] = useState<Set<string>>(()=>new Set()) 
    
    
    const color = useMemo(()=>{
        const buffer:Set<string> = new Set()
        products.map(e=>buffer.add(e.color))
        return Array.from(buffer)
    },[products])


    function handleChance  (color:string,checkbox:boolean){
        const draft = structuredClone(state)
        console.log(checkbox)
        if(checkbox) {
            draft.add(color)
        }else {
            draft.delete(color)
        }
        onChange(draft.size ?(product)=>draft.has(product.color):null)
        setState(draft)
    }
    console.log(state)


    
    return (
        <div style={{border:"1px solid white", borderRadius:"8px",display:"flex",padding:12,flexDirection:"column",gap:12, width:"250px",marginLeft:20}}>
            <ul style={{padding:12}}>
                {
                    color.map(e=><li style={{listStyle:"none"}} key={e} >
                        <label style={{color:"#fff",display:"flex",gap:12}}>
                        <input 
                        style={{ background:"#fff",borderRadius:"100%",cursor: "pointer"}} 
                        onChange={(es)=>handleChance(e,es.target.checked)} type="checkbox" name="color" value={e} 
                        />
                        {e}
                        </label>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ColorFilter