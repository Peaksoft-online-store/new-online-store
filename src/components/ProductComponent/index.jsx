import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ProductComponent.scss'
export const ProductComponent = () => {
  const products = useSelector((state) => state.products)
  return (
    <div className='main_card'>
      {products && products.map((product) => {
        const { id, title, price, category, image } = product
        return (
          <div className='cards_list' key={id}>
            <Link to={`/choose/${id}`}>
              <div className='image'>
                <img src={image} alt='' />
              </div>
              <div className='card_p'>
                <p>{title}</p>
              </div>
              <div className='card_b'>
                <b>$ {price}</b>
              </div>
              <div className='card_i'>
                <b>{category}</b>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
