import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple lighten-1 px1 ">
            <a href="/" className="brand-logo">React TS Logo</a>
            <ul  className="right hide-on-med-and-down">
            <li><a href="/">Список</a></li>
            <li><a href="/">Инфо </a></li>
            </ul>
        </div>
  </nav>
)