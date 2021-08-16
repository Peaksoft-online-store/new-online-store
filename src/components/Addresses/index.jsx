import React from 'react'
import './Addresses.scss'
import { Link } from 'react-router-dom'
export const Addresses = () => {
  return (
    <Link to='/addresses'>
      <div className='container d'>
        <h1 className='inf'>Информация о доставке и пунктах выдачи</h1>
        <div className='address'>
          <div className='text'>
            <h4>Пункты выдачи</h4>
            <div className='punct'>
              <h3>
                г Бишкек (город республиканского подчинения
                Бишкек) улица Жукеева-Пудовкина 77/1
              </h3>
              <p className='information'>
                Ежедневно 10:00-21:00, примерочные: 12 шт. Пункт
                выдачи Wildberries
              </p>
              <h3>
                г. Бишкек (город республиканского подчинения
                Бишкек), 4-й мкр, д. 49/1
              </h3>
              <p className='information'>
                Ежедневно 10:00-21:00 Пункт выдачи Wildberries
              </p>
            </div>
          </div>
          <div className="carta">
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23394.918298279383!2d74.56713300737916!3d42.8651441032422!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1628082770984!5m2!1sru!2skg'
              className='map'
            ></iframe>
          </div>
        </div>
      </div>
    </Link>
  )
}