import React, { useContext } from 'react'
import './Header.scss'
import { EnvironmentOutlined } from '@ant-design/icons'
import g from '../../images/gps.png'
import basket from '../../images/basket.png'
import userIcon from '../../images/userIcon.png'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../index'
import { Button } from '@material-ui/core'
export const Header = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <div className='header'>
      <div className='container'>
        <div className='h'>
          <ul>
            <li>Kg/Русский</li>
            <li>
              <EnvironmentOutlined />
              Бишкек
            </li>
            <li>Бесплатная доставка</li>
            <li>Продавцам</li>
          </ul>
          <div className='head'>
            <Link to='/'>
              <h1>BERMET & BAHA</h1>
            </Link>
            <input className='search' placeholder='Я ищу...' />
            <div className='icons'>
              <Link to='/addresses'>
                <div className='about'>
                  <img className='icon' src={g} />
                  <h3>Адреса</h3>
                </div>
              </Link>
              {user ? (
                ''
              ) : (
                <Link to='/login'>
                  <div className='about'>
                    <img className='icon' src={userIcon} />
                    <h3>Аккаунт</h3>
                  </div>
                </Link>
              )}
              <Link to='/basket'>
                <div className='about'>
                  <img className='icon' src={basket} />
                  <h3>Корзина</h3>
                </div>
              </Link>
              <div className="userInf">
                {user ? (
                  <Link to='/'>
                    <h5 className="userDispName">{user.displayName}</h5>
                    <Button
                      onClick={() => auth.signOut()}
                      variant={'outlined'}
                    >
                      Выйти
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
