// import type { EventHandler } from 'react';
import classes from './Button.module.css'

interface iButton {
    ID?: string;
    onClick: (React.MouseEventHandler<HTMLButtonElement>);
    children: any[] | any;
}

export const Button: React.FC<iButton> = (props:iButton) => {
    return (
        <button id={props.ID} onClick={props.onClick} className={classes.butt}>
            {props.children}
        </button>
    );
}