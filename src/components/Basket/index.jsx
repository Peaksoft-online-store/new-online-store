import React, { useEffect, useContext } from 'react'
import './Basket.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { removeSelectedProduct } from '../../store/actions'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { useDispatch } from 'react-redux'
// import { removeSelectedProduct, selectedProducts } from '../../store/actions'
import { increment, decrement, deleteProduct } from '../../store/actions'
export const Basket = () => {
  const product = useSelector((state) => state.orders)
  const state = useSelector((state) => state.products)
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (user) {
  //     console.log("teest", state);
  //     localStorage.setItem('product', JSON.stringify(product))
  //   } else {
  //     localStorage.removeItem('product')
  //   // }
  // }, [product])
  return (
    <div className='container pr'>
      <Link to='/basket'>
        {product.length ? (
          product.map((order, index) => {
            return (
              <>
                <div className='basket_main' key={index}>
                  <div className='productImg'>
                    <img src={order.image} alt='' />
                  </div>
                  <div className='basket_increment'>
                    <div>
                      <div>{order.title}</div>
                      <span>$ {order.price}</span>
                    </div>
                    <div className='count'>
                      <button
                        className='btn'
                        onClick={() =>
                          dispatch(
                            decrement(order.id),
                          )
                        }
                      >
                        -
                      </button>
                      <p>{order.count}</p>
                      <button
                        className='btn'
                        onClick={() =>
                          dispatch(
                            increment(order.id),
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='basket_solution'>
                    <p>{order.count * order.price}$</p>
                  </div>
                  <div
                    onClick={() =>
                      dispatch(deleteProduct(order))
                    }
                  >
                    delete
                  </div>
                </div>
                <div className='basket_all_product'>
                  You have {order.count} product
                </div>
              </>
            )
          })
        ) : (
          <div className='basket'>
            <h1>В корзине пока ничего нет</h1>
            <p>
              Начните с главной страницы или воспользуйтесь
              поиском, чтобы найти что-то конкретное
            </p>
            <Link to='/'>
              <button className='btn'>Перейти на главную</button>
            </Link>
          </div>
        )}
      </Link>
    </div>
  )
}
