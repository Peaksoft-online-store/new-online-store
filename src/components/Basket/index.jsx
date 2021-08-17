import React, { useEffect, useContext, useState } from 'react'
import './Basket.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { useDispatch } from 'react-redux'
import { add_order, delete_order, remove } from '../../store/actions'

export const Basket = () => {
	const orders = useSelector((state) => state.orders)
	const totalPrice = useSelector((state) => state.totalPrice)
	const totalCount = useSelector((state) => state.totalCount)
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	const dispatch = useDispatch()

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
											<span>{totalPrice} $</span>
										</div>
										<div className='count'>
											<button
												className='btn'
												onClick={() => {
													if (totalCount !== 1) {
														dispatch(
															delete_order(order),
														)
													} else {
														return null
													}
												}}
											>
												-
											</button>
											<p className='num'>{totalCount}</p>
											<button
												className='btn'
												onClick={() =>
													dispatch(
														add_order(order),
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
												totalCount * totalPrice,
											)}
											$
										</p>
									</div>
									<div
										onClick={() =>
											dispatch(remove(index))
										}
										className='delete'
									>
										Удалить
									</div>
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
