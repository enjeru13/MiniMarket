import { useForm } from "react-hook-form"
import { useCategories } from "../context/CategoryContext"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react"


function CategoryFormPage() {

  const { register, handleSubmit } = useForm()
  const { createCategory, getCategory } = useCategories()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
      if (params.id) {
        getCategory(params.id)
      }
  }, [])
  

  const onSubmit = handleSubmit((data) => {
    createCategory(data)
    navigate('/categories')
  })
  
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='max-w-md p-10 rounded-md'>

    <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-6'>

                    <h1 className='text-2xl font-bold p-2'>Agrega una Nueva Categoria</h1>

                    <input type="text"
                    placeholder="Nombre de la Categoria"
                    {...register('name')}
                    className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                    autoFocus
                     />

                    
                    <button type='submit' className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-700 cursor-pointer transition-all my-2'>Agregar</button>
                </form>
    </div>
    </div>
  )
  }

export default CategoryFormPage
