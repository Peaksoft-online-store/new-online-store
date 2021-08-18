import React, { useContext } from 'react'
import './Header.scss'
import { EnvironmentOutlined } from '@ant-design/icons'
import g from '../../images/gps.png'
import userIcon from '../../images/userIcon.png'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { Button } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge)
export const Header = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	const orders = useSelector((state) => state.orders)
	const calculateCount = () => {
		let result = orders.reduce((sum, orderItem) => {
			return sum + orderItem.count
		}, 0)
		return result
	}
	return (
		<div className='header'>
			<div className='container'>
				<div className='h'>
					<ul>
						<li>Kg/Russian</li>
						<li>
							<EnvironmentOutlined />
							Bishkek
						</li>
						<li>Free shipping</li>
						<li>For sellers</li>
					</ul>
					<div className='head'>
						<Link to='/'>
							<h1>BEMA & BAHA</h1>
						</Link>
						<input className='search' placeholder='Search ...' />
						<div className='icons'>
							<Link to='/addresses'>
								<div className='about'>
									<img className='icon' src={g} />
									<h3>Addresses</h3>
								</div>
							</Link>
							{user ? (
								''
							) : (
								<Link to='/login'>
									<div className='about'>
										<img className='icon' src={userIcon} />
										<h3>Account</h3>
									</div>
								</Link>
							)}
							<Link to='/basket'>
								<div className='about'>
									<IconButton aria-label='cart'>
										<StyledBadge
											badgeContent={calculateCount()}
											color='secondary'
										>
											<ShoppingCartIcon />
										</StyledBadge>
									</IconButton>
									<h3>Basket</h3>
								</div>
							</Link>
							<div className='userInf'>
								{user ? (
									<Link to='/'>
										<h5 className='userDispName'>
											{user.displayName}
										</h5>
										<Button
											onClick={() => auth.signOut()}
											variant='contained'
											color='secondary'
										>
											Logout
										</Button>
									</Link>
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
