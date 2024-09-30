import React from 'react'
import './Item.css';
export const Item = () => {
  return (
    <div className='item'>
        <div className='item--icono'>
            <img src="/images/check-icono.png" alt="icono" />
        </div>
        <div className='item--descripcion'>
            <h2>número de semama</h2>
            <p>Breve descripcion</p>
            <a className='enlace-github' href="">Enlace a github</a>
        </div>
    </div>
  )
}
