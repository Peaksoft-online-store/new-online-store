import React, { useEffect, useContext, useState } from 'react'
import './Basket.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { useDispatch } from 'react-redux'
import { increment, decrement, deleteProduct } from '../../store/actions'

export const Basket = () => {
	const orders = useSelector((state) => state.orders)
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	if (user) {
	// 		if (orders.length) {
	// 			localStorage.setItem('orders', JSON.stringify(orders))
	// 		}
	// 	} else {
	// 		localStorage.removeItem('orders')
	// 	}
	// }, [orders])

	return (
		<div className='container pr'>
			<Link to='/basket'>
				{orders.length ? (
					orders.map((order, index) => {
						return (
							<>
								<div className='basket_main' key={index}>
									<div className='productImg'>
										<img src={order.image} />
									</div>
									<div className='orderName'>
										<div>
											<div>{order.title}</div>
											<span>{order.price} $</span>
										</div>
										<div className='count'>
											<button
												className='btn'
												onClick={() => {
													if (order.count !== 1) {
														dispatch(
															decrement(order.id),
														)
													} else {
														return null
													}
												}}
											>
												-
											</button>
											<p className='num'>{order.count}</p>
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
										<p>
											{Math.floor(
												order.count * order.price,
											)}
											$
										</p>
									</div>
									<div
										onClick={() =>
											dispatch(deleteProduct(index))
										}
										className='delete'
									>
										Удалить
									</div>
								</div>
								<div className='orderCount'>
									You have {order.count} product
								</div>
							</>
						)
					})
				) : (
					<div className='basket'>
						<h1 className='korz'>В корзине пока ничего нет</h1>
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
