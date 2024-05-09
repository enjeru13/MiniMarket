import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <nav className="my-3 bg-indigo-700 flex justify-between py-5 px-5 rounded-md">
      <Link to='/' className="text-2xl font-bold text-white">MiniMarket</Link>
      <ul className="flex gap-5">
        {isAuthenticated ? (
          <>
          <li className="text-2xl font-bold text-white">Bienvenido {user.username}!
            </li>
            <li>
              <Link to='/categories' className="text-2xl font-bold bg-gray-100 rounded-md p-2">Categorias</Link>
            </li>
            <li>
              <Link to='/products' className="text-2xl font-bold bg-gray-100 rounded-md p-2">Productos</Link>
            </li>
            <li>
              <Link to='/add-category' className="text-2xl font-bold bg-gray-100 rounded-md p-2">Agregar Categoria</Link>
            </li>
            <li>
              <Link to='/add-product' className="text-2xl font-bold bg-gray-100 rounded-md p-2">Agregar Producto</Link>
            </li>
            <li>
              <Link to='/login' onClick={() => {
                logout()
              }} className="text-2xl font-bold bg-gray-100 rounded-md p-2">Cerrar Sesión</Link>
            </li>
          </>
        ) : (
          <>
            <li className="pt-1">
              <Link to='/register' className=" bg-gray-100 rounded-md p-2 font-bold">Registrarse</Link>
            </li>
            <li className="pt-1">
              <Link to='/login' className="bg-gray-100 rounded-md p-2  font-bold">Iniciar Sesión</Link>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default NavBar
