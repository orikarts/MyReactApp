// import '../App.css';
import classes from './Header.module.css'
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header>
        <nav className={classes.wrapper}>
            <a className={classes.logo} href="index.html"><img src='images_design/Philips_logo.svg' alt="PHILIPS"/></a>
            <ul>
                <li><a href="index.html"><strong>Каталог</strong></a></li>
            </ul>
        </nav>
    </header>
    )
};
