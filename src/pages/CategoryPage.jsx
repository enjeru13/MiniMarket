import { useEffect } from 'react'
import { useCategories } from '../context/CategoryContext'
import CategoryCard from '../components/CategoriesCard'

function CategoryPage() {
  const {getCategories, categories} = useCategories()

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div>
      {categories.map((category) => (
        <CategoryCard category={category} key={category._id}/>
      ))}
    </div>
  )
}

export default CategoryPage
