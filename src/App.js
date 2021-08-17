import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import ProductDetails from './components/ProductDetails'
import { Footer } from './components/Footer'
import ProductList from './components/ProductList'
import { Login } from './components/Login'
import { Addresses } from './components/Addresses'
import { Basket } from './components/Basket'
import { Loader } from './components/Loader/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from './index'
import { useContext } from 'react'
import './App.scss'

function App() {
	const { auth } = useContext(Context)
	const [user, loading] = useAuthState(auth)

	if (loading) {
		return <Loader />
	}
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/addresses' component={Addresses} />
					<Route path='/basket' component={Basket} />
					<Route
						path='/choose/:productId'
						component={ProductDetails}
					/>
					<Route path='/' exact component={ProductList} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}
export default App
