import React from 'react';
import classes from './Footer.module.css'

export const Footer: React.FC = () => {
    return (
        <footer>
        <div className={classes.wrapper}>
            <ul>
                <a href="">
                    <li>Споживчі товари</li>
                </a>
                <a href="">
                    <li>Служба підтримки клієнтів</li>
                </a>
                <a href="">
                    <li>Вхід в My Philips</li>
                </a>
            </ul>
            <ul>
                <a href="">
                    <li>Медичні працівники</li>
                </a>
                <a href="">
                    <li>Обладнання</li>
                </a>
                <a href="">
                    <li>Сервіс</li>
                </a>
            </ul>
            <ul>
                <a href="">
                    <li>Про компанію</li>
                </a>
                <a href="">
                    <li>Новини</li>
                </a>
                <a href="">
                    <li>Для інвесторів</li>
                </a>
            </ul>
        </div>
    </footer>
    );
}