import { useEffect, useMemo, useState } from "react"
import { Filter, Product } from "../types"


type Props ={
    onChange:(filter:Filter)=>void
}


const RatingFilter:React.FC<Props> = ({onChange}) =>{
    const [state, setState] = useState<Set<number>>(()=>new Set()) 
    


    function handleChance  (rating:number,checkbox:boolean){
        const draft = structuredClone(state)
        console.log(checkbox)
        if(checkbox) {
            draft.add(rating)
        }else {
            draft.delete(rating)
        }
        onChange(draft.size ?(product)=>draft.has(product.rating):null)
        setState(draft)
    }
    console.log(state)


    
    return (
        <div style={{border:"1px solid white", borderRadius:"8px",display:"flex",padding:12,flexDirection:"column",gap:12, width:"250px",marginLeft:20}}>
            <ul style={{padding:12}}>
                {
                    [1,2,3,4,5].map((rating)=><li style={{listStyle:"none"}} key={String(rating)} >
                        <label 
                        style={{color:"#fff",display:"flex",gap:12}}>
                        <input 
                        style={{ background:"#fff",borderRadius:"100%",cursor: "pointer"}}
                        onChange={(es)=>handleChance(rating,es.target.checked)}
                        type="checkbox" 
                        name="color" 
                        value={String(rating)} />
                            {"★".repeat(rating).padEnd(5,"☆")}
                        </label>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RatingFilter