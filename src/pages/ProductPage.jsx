import { useEffect } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductsCard from '../components/ProductsCard'

function ProductPage() {
  const { getProducts, products } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return <div className='grid grid-cols-3 gap-5 pt-5'>
    {
      products.map(product => (
        <ProductsCard product={product} key={product._id}/>
      ))
    }
  </div>
}

export default ProductPage