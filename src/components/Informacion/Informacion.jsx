import React from 'react'
import './Informacion.css';
export const Informacion = () => {
  return (
    <section className='capacidades'>
        <h2 className='capacidades__titulo'>Capacidades en 3 años de formacion:</h2>
        <div className='capacidades--elementos'>
            <div className='capacidades__imagen'>
                <img className='github-icono' src="/images/3dgithub.png" alt="" />
            </div>
            <div className='capacidades-lista'>
                <ul>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Versatilidad Técnica</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Conocimientos de Diseño de UI/UX</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Solución de Problemas</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Gestión de Bases de Datos</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Control de Versiones</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Comprensión de Arquitectura Web</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Habilidades de Testing y Depuración</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Adaptabilidad y Aprendizaje Continuo</li>
                    <li><img className='img-check-list'  src="/images/check-list.png" alt="" /> Comunicación Efectiva</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
