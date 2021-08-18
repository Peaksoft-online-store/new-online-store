import React, { useEffect, useContext, useState } from 'react'
import './Basket.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { useDispatch } from 'react-redux'
import { add_order, delete_order, remove } from '../../store/actions'


export const Basket = () => {
	const dispatch = useDispatch()

	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	const orders = useSelector((state) => state.orders)


	const getTotalPrice = (orderItem) => {
		return orderItem.count
	}

	const getTotalCount = (orderItem) => {
		return orderItem.price * orderItem.count
	}






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

													dispatch(
														delete_order(order),
													)

												}}
											>
												-
											</button>
											<p className='num'>{getTotalCount(order)}</p>
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
											{getTotalPrice(order)}
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
								{/* text <white-space></white-space> */}
								{/* heiht:auto */}
								{/* footer basket */}
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
