import { products } from "../data/products"
import Link from "next/link"

const ProductList = ({addToCart}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded bg-white shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded bg-slate-200"/>
          <h2 className="text-lg font-semibold mt-4 camelCase">{product.name}</h2>
          <p className="text-slate-700">${product.price}</p>
          <button onClick={() => addToCart(product)} className="mt-2 py-2 px-4 bg-gradient-to-tr from-purple-500 via-purple-700 to-yellow-600 text-white rounded">
            Add To Cart
          </button>
          
        </div>   
      ))}
      

    </div>
  )
}

export default ProductList