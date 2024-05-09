import { Link } from "react-router-dom"
import { useProducts } from "../context/ProductContext"

function ProductsCard({ product }) {

  const { deleteProduct } = useProducts()

  return (
    <div className="bg-indigo-700 rounded-md p-9">
      <header className="flex justify-between">
    <h1 className="text-2xl font-bold text-white">{product.name}</h1>
  
  <div className="flex gap-x-2 items-center pt-1 text-white font-bold">
      <button onClick={() => {
        deleteProduct(product._id)
      }}>Eliminar</button>
      <Link to={`/products/${product._id}`}>Editar</Link>
      <button>Detalles</button>
    </div>
    </header>
    </div>
  )
}

export default ProductsCard
