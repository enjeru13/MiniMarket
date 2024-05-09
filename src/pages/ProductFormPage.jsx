import { useForm } from "react-hook-form"
import { useProducts } from "../context/ProductContext"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react"


function ProductFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createProduct, getProduct } = useProducts()
  const navigate = useNavigate()
  const params = useParams()


  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id)
      console.log(product)
        setValue('name')
      }
    }
    loadProduct()
  }, [])

  const onSubmit = handleSubmit((data) => {
    createProduct(data)
    navigate('/products')
  })
  
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='max-w-md p-10 rounded-md'>

    <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-6'>

                    <h1 className='text-2xl font-bold p-2'>Agrega una Nuevo Producto</h1>

                    <input type="text"
                    placeholder="Nombre del Producto"
                    {...register('name')}
                    className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                    autoFocus
                     />
                     <input type="number"
                    placeholder="Cantidad del Producto"
                    {...register('stock')}
                    className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                    autoFocus
                     />
                     <input type="number"
                    placeholder="Precio del Producto"
                    {...register('price')}
                    className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                    autoFocus
                     />
                     <input type="text"
                    placeholder="Categoria del Producto"
                    {...register('category')}
                    className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                    autoFocus
                     />

                    
                    <button type='submit' className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-700 cursor-pointer transition-all my-2'>Agregar</button>
                </form>
    </div>
    </div>
  )
}

export default ProductFormPage
