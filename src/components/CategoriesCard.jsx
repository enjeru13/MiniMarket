import { useCategories } from "../context/CategoryContext"
import { Link } from 'react-router-dom'

function CategoriesCard({ category }) {

    const { deleteCategory } = useCategories()

  return (
    <div className="bg-indigo-700 rounded-md p-9">
      <header className="flex justify-between">
      <h1 className="text-2xl font-bold text-white">{category.name}</h1>
    <div className="flex gap-x-2 items-center pt-1 text-white font-bold">
      <button onClick={() => {
        deleteCategory(category._id)
      }}>Eliminar</button>
      <Link to={`/categories/${category._id}`}>Editar</Link>
    </div>
      </header>
  </div>
  )
}

export default CategoriesCard
