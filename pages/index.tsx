import type { GetStaticProps, NextPage } from "next"
import { useMemo, useState } from "react"
import ColorFilter from "../components/colorFilter"
import PriceFilter from "../components/priceFilter"
import ProductCard from "../components/ProductCard"
import RatingFilter from "../components/ratingFilter"
import { Filter, Product } from "../types"
import api from "./api"
// import "./globalStyle.css"
type Props ={
  products:Product[]
}



export const getStaticProps: GetStaticProps = async ()=>{
  const products = await api.product.list()
  return {
    props:{
      products
    }
  }
}


const Home:NextPage<Props> = ({products}) => {
  // console.log(products)
  const [filters,setFilters] = useState<Record<string,Filter>>({
    price:null,
    color:null,
    rating:null
  })

  const matches = useMemo(()=>{
    const filtersToApply = Object.values(filters).filter(Boolean)
    let matches = products
    for(let filter of filtersToApply){
      matches=matches.filter(filter!)
    }
    return matches
  },[products,filters])

  // console.log(matches)

  return <main style={{display:"flex"}}>
    <div>
      
      <PriceFilter
        onChange={(filter:Filter)=>setFilters(filters=>({...filters,price:filter}))} 
      />

        <ColorFilter 
        onChange={(filter:Filter)=>setFilters(filters=>({...filters,color:filter}))} 
        products={products}
        />

        <RatingFilter 
        onChange={(filter:Filter)=>setFilters(filters=>({...filters,rating:filter}))}
        />

    </div>
    <div>
      <h2 style={{display:"flex",flexDirection:"column", gap:13, margin:20}}>{matches.length} results</h2>
    <section style={{gap:"20px", display:"flex", flexWrap:"wrap", textAlign: "center", justifyContent:"center" }}>
      {
        matches.map(e=><article key={e.id}>
          <ProductCard product={e}/>
        </article>)
      }
    </section>
    </div>
  </main>
}

export default Home