import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import pic from '../../images/1.jpg'
import pic2 from '../../images/2.jpg'
import pic3 from '../../images/3.jpg'
import pic4 from '../../images/4.jpg'
import './Advertising.scss'

export const Advertising = () => {
	return (
		<div className='carousel'>
			<Carousel autoplay>
				<div className='dd'>
					<img className='carImg' src={pic} />
				</div>
				<div className='dd'>
					<img className='carImg' src={pic2} />
				</div>
				<div className='dd'>
					<img className='carImg' src={pic3} />
				</div>
				<div className='dd'>
					<img className='carImg' src={pic4} />
				</div>
			</Carousel>
		</div>
	)
}
