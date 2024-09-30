import React from 'react'
import './Header.css';
export const Header = () => {
  return (
    <header>
      <nav>
        <a className='enlace enlace--home' href="">Home</a>
        <a className='enlace' href="">Trabajos</a>
        <a className='enlace' href="">Contacto</a>
      </nav>
      <div className='presentacion'>
        <div className='presentacion__descripcion'>
          <p className='mt2'>Desarrolador Full Stack - QA Tester</p>
          <h1 className='mt2'>Billy Castro Bullon</h1>
          <h3 className='mt2'>VI Semestre Diurno Programación</h3>
        </div>
        <div className='presentacion__imagen'>
          <img className='img-movil' src="/images/movil.png" alt="" />
        </div>
      </div>
    </header>
  )
}
