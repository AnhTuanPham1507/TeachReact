import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProduct(){
      try {
        const res = await fetch('http://127.0.0.1:3001/product',{method: 'GET'})
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        alert(error)
      }
    }
    getProduct()
  },[])

  return (
    <>
      <NavBar />
      <ProductCard products={products} />
    </>
  )
}

export default App;
