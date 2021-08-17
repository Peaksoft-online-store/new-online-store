import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProducts } from '../../store/actions'
import Button from '@material-ui/core/Button'
import './ProductDetails.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	const product = useSelector((state) => state.products)
	const dispatch = useDispatch()
	const { productId } = useParams()
	return (
		<div>
			{product.map((el, id) => {
				if (id + 1 == productId) {
					return (
						<div key={id} className='setProduct'>
							<div className='container setProduct_main'>
								<div className='productImg'>
									<img src={el.image} alt='' />
								</div>
								<div className='productSecond'>
									<h4>{el.title}</h4>
									<p className='productPrice'>
										<b> ${el.price}</b>
									</p>
									<div className='setProduct_category'>
										<i>{el.category}</i>
									</div>
									<p className='description'>
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
