import { createContext, useContext, useState } from "react";
import {
  createProductRequest,
  deleteProductRequest,
  getProductsRequest,
  getProductRequest,
  updateProductRequest,
} from "../api/products";

const ProductContext = createContext()

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts debe usarse con ProductProvider')
    }
    return context
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
            const res = await getProductsRequest()
        setProducts(res.data)
    }

    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id)
            if (res.status === 204) products.filter(product => product._id != id)
        } catch (error) {
            console.log(error)
        }
        
    }

    const createProduct = async (product) => {
        try {
          const res = await createProductRequest(product);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };



      const getProduct = async (id) => {
        try {
          const res = await getProductRequest(id);
          return res.data;
        } catch (error) {
          console.error(error);
        }
      };

      const updateProduct= async (id, product) => {
        try {
          await updateProductRequest(id, product);
        } catch (error) {
          console.error(error);
        }
      };



    return <ProductContext.Provider value={{
        products,
        createProduct,
        getProducts,
        deleteProduct,
        getProduct,
        updateProduct,
    }}>{children}</ProductContext.Provider>
}