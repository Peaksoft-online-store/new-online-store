import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProducts } from '../../store/actions'
import Button from '@material-ui/core/Button'
// import { removeSelectedProduct, selectedProducts } from '../../store/actions'
import './ProductDetails.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
// import { Login } from '../Login'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	const product = useSelector((state) => state.products)
	// const orders = useSelector((state) => state.allProducts.orders)
	const dispatch = useDispatch()
	const { productId } = useParams()
	// console.log(orders)
	return (
		<div>
			{product.map((el, id) => {
				if (id + 1 == productId) {
					return (
						<div key={id} className='setProduct_main'>
							<div className='container setProduct_main2'>
								<div className='setProduct_img'>
									<img src={el.image} alt='' />
								</div>
								<div className='setProduct_second'>
									<h4>{el.title}</h4>
									<p className='setProduct_price'>
										<b> ${el.price}</b>
									</p>
									<div className='setProduct_category'>
										<i>{el.category}</i>
									</div>
									<p className='setProduct_description'>
										{el.description}
									</p>
									{user ? (
										<Link to='/basket'>
											<Button
												variant='contained'
												onClick={() =>
													dispatch(
														selectedProducts(el),
													)
												}
												style={{ cursor: 'pointer' }}
												key={id}
											>
												Add to cart
											</Button>
										</Link>
									) : (
										<Link to='/login'>
											<Button
												variant='contained'
												onClick={() =>
													dispatch(
														selectedProducts(el),
													)
												}
												style={{ cursor: 'pointer' }}
												key={id}
											>
												Add to cart
											</Button>
										</Link>
									)}
								</div>
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}

export default ProductDetails
