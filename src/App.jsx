import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CategoryFormPage from './pages/CategoryFormPage';
import ProductFormPage from './pages/ProductFormPage';
import ProfilePage from './pages/ProfilePage';

import ProtectedRoute from './ProtectedRoute'
import { CategoryProvider } from './context/CategoryContext';
import { ProductProvider } from './context/ProductContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';


function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10'>
          <NavBar/>
          <Routes>
            <Route path='/' element={HomePage} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/categories' element={<CategoryPage />} />
                <Route path='/add-category' element={<CategoryFormPage />} />
                <Route path='/categories/:id' element={<CategoryFormPage />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/add-product' element={<ProductFormPage />} />
                <Route path='/products/:id' element={<ProductFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>
          </Routes>
          </main>
        </BrowserRouter>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}
export default App