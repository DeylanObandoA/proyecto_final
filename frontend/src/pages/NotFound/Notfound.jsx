import React from 'react'
import "./Notfound.css"
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='main-container'>
            <div className='Caja'>
                <span className="loader2 h1"></span>
                <div className='cargador'>
                    <span className="loader"></span>
                </div>
                <div className='Link'>
                    <p className='Link'>toca para ir a pagina principal</p>
                    <Link to="/">Pagina Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;