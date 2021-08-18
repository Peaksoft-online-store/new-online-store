import React from 'react'
import './Footer.scss'
import google from '../../images/google.png'
import appStore from '../../images/appStore.png'
export const Footer = () => {
	return (
		<div className='footer'>
			<div className='container foot'>
				<div className='spis'>
					<h2>Buyers</h2>
					<li>How to make an order</li>
					<li>Payment Methods</li>
					<li>Delivery</li>
					<li>Sale rules</li>
					<li>
						Terms of use of the <br />
						trading platform{' '}
					</li>
					<li>Questions and answers</li>
				</div>
				<div className='spis'>
					<h2>Our projects</h2>
					<li>Healthy lifestyle and sports</li>
					<li>For children</li>
					<div style={{ paddingTop: '20px' }}>
						<h2>For partners</h2>
						<li>For sellers</li>
					</div>
				</div>
				<div className='spis'>
					<h2>Company</h2>
					<li>About Us</li>
					<li>Requisites</li>
					<li>Press center</li>
					<li>Contacts</li>
					<li>Bug Bounty</li>
				</div>
				<div className='spis'>
					<h2>We are in social networks</h2>
					<li>
						<a href='https://vk.com/'>vk.com</a>
					</li>
					<li>
						<a href='https://www.facebook.com/'>Facebook</a>
					</li>
					<li>
						<a href='https://vk.com/'>Одноклассники</a>
					</li>
					<li>
						<a href='https://www.youtube.com/'>YouTube</a>
					</li>
					<li>
						<a href='https://www.instagram.com/'>Instagram</a>
					</li>
				</div>
				<div className='spis'>
					<h2>Mobile devices</h2>
					<a href='https://play.google.com/store'>
						<img
							src={google}
							alt='google'
							style={{ paddingTop: '15px' }}
						/>
					</a>
					<div>
						<a href='https://www.apple.com/ru/app-store/'>
							<img
								src={appStore}
								alt='appStore'
								className='app-store'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
