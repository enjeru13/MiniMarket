import { useEffect } from 'react'
import { useCategories } from '../context/CategoryContext'
import CategoryCard from '../components/CategoriesCard'

function CategoryPage() {
  const { getCategories, categories } = useCategories()

  useEffect(() => {
    getCategories()
  }, []);


  return (
    <div className='grid grid-cols-3 gap-5 pt-5'>
      {categories.map((Category) => (
        <CategoryCard category={Category} key={Category._id}/>
      ))}
    </div>
  )
}

export default CategoryPage
