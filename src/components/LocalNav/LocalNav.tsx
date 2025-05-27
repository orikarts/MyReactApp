import classes from './LocalNav.module.css'
import React from 'react';

export const LocalNav: React.FC = () => {
    return (
            <nav className={classes.upper_menu}>
        <a href="#hygiene" className={classes.item}>
            <img className={classes.nav_item} src='images_design/mirror.svg' alt=""/>
            <div className={classes.item_text}>
                Засоби особистої гігієни
            </div>
        </a>
                <a href="#home" className={classes.item}>
            <img className={classes.nav_item} src='images_design/microwave.png' alt=""/>
            <div className={classes.item_text}>
                Товари для дому
            </div>
        </a>
                <a href="#baby" className={classes.item}>
            <img className={classes.nav_item} src='images_design/feeding-bottle.svg' alt=""/>
            <div className={classes.item_text}>
                Для матері та малюка
            </div>
        </a>
    </nav>
    );
}