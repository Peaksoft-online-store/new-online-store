import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../store/actions'
import { Advertising } from '../Advertising'
import { ProductComponent } from '../ProductComponent'


const ProductList = () => {

  const dispatch = useDispatch()

  const FetchProducts = async () => {

    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log('err:', err)
      })
    dispatch(setProduct(response.data))
  }
  useEffect(() => {
    FetchProducts()
  }, [])
  return (
    <div className="container">
      <Advertising />
      <ProductComponent />
    </div>
  )
}

export default ProductList
