import React from 'react'
import './Main.css'
import { Item } from './Item/Item'
export const Main = () => {
  return (
    <main>
      <div className='contenedor-main'>
        <h2 className='trabajos--titulo'>Trabajos de la semana</h2>
        <div className='grid__main'>
          <Item
            semana={"Semana #1"}
          />
          <Item
            semana={"Semana #2"}
            enlace={"https://github.com/BillyCastroB/archivos-tareas/blob/main/Actividad%2002%20CastroBullon.pdf"}
          />
          <Item
            semana={"Semana #3"}
            enlace={"https://github.com/BillyCastroB/archivos-tareas/blob/main/cuadrado.dart"}
          />
          <Item
            semana={"Semana #4"}
          />
          <Item
            semana={"Semana #5"}
          />
          <Item
            semana={"Semana #6"}
          />
          <Item
            semana={"Semana #7"}
          />
          <Item
            semana={"Semana #8"}
          />
          <Item
            semana={"Semana #9"}
          />
          <Item
            semana={"Semana #10"}
          />
          <Item
            semana={"Semana #11"}
          />
          <Item
            semana={"Semana #12"}
          />
          <Item
            semana={"Semana #13"}
          />
          <Item
            semana={"Semana #14"}
          />
          <Item
            semana={"Semana #15"}
          />

        
        </div>
      </div>
    </main>
  )
}
