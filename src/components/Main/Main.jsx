import React from 'react'
import './Main.css'
import { Item } from './Item/Item'
export const Main = () => {
  return (
    <main>
      <div className='contenedor-main'>
        <h2 className='trabajos--titulo'>Trabajos de la semana</h2>
        <div className='grid__main'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
    </main>
  )
}
