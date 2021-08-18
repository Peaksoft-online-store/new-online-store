import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../index'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Container, Grid, Box, Button } from '@material-ui/core'
import './Login.scss'

export const Login = () => {
	const styles = {
		alignItems: 'center',
		justifyContent: 'center',
	}
	const styles_2 = {
		width: '400px',
		background: 'lightgray',
	}

	const history = useHistory()
	// с помощью хука useContext мы получил объект для авторизации
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth) // авторизовался ли пользователь

	// функция асинхронная
	const login = async () => {
		// с помощью функции необходимо получить провайдер авторизации
		const provider = new firebase.auth.GoogleAuthProvider()
		// получаем пользователя после того,как мы авторизовались
		const { user } = await auth.signInWithPopup(provider)
	}
	if (user) {
		history.push('/basket')
	}

	return (
		<Link to='/login'>
			{user ? (
				<Button onClick={() => auth.signOut()} variant={'outlined'}>
					Выйти
				</Button>
			) : (
				<Container>
					<h3 className="auth">Авторизуйтесь сначала</h3>
					<Grid container style={styles}>
						<Grid
							container
							alignItems={'center'}
							direction={'column'}
							style={styles_2}
						>
							<Box p={5}>
								<Button onClick={login} variant={'outlined'}>
									Войти с помощью Google
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			)}
		</Link>
	)
}
