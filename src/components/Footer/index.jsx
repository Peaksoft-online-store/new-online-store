import React from 'react'
import './Footer.scss'
import google from '../../images/google.png'
import appStore from '../../images/appStore.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container foot'>
        <div className='spis'>
          <h2>Покупателям</h2>
          <li>Как сделать заказ</li>
          <li>Способы оплаты</li>
          <li>Доставка</li>
          <li>Правила продажи</li>
          <li>
            Правила пользования <br />
            торговой площадкой{' '}
          </li>
          <li>Вопросы и ответы</li>
        </div>
        <div className='spis'>
          <h2>Наши проекты</h2>
          <li>ЗОЖ и спорт</li>
          <li>Детям</li>
          <div style={{ paddingTop: '20px' }}>
            <h2>Партнерам</h2>
            <li>Продавцам</li>
          </div>
        </div>
        <div className='spis'>
          <h2>Компания</h2>
          <li>О нас</li>
          <li>Реквизиты</li>
          <li>Пресс-центр</li>
          <li>Контакты</li>
          <li>Bug Bounty</li>
        </div>
        <div className='spis'>
          <h2>Мы в соцсетях</h2>
          <li>
            <a href='https://vk.com/'>Вконтакте</a>
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
          <h2>Мобильные устройства</h2>
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
