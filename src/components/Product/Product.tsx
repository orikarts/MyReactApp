import React from 'react';
import { useState } from 'react';
import classes from './Product.module.css'
import { Button } from '../Button/Button';



interface iProduct {
    data: {
        imgUrl: string;
        price: string;
        title: string;
        subtitle: string;
        description: string[];
    }
}

export const Product: React.FC<iProduct> = (props:iProduct) => {
    const [count, setCount] = useState(0);
    function handleClickAdd() {
        setCount(count+1);
    };
        function handleClickClear() {
        setCount(0);
    } 


    let content = () => {
        if(count)
        return (
                <Button ID="orange" onClick={handleClickClear}>
                Очистити ({count})
                </Button>
        );
    }
    return (
                    <article className={classes.product}>

                        <div className={classes.wrapper}>
                            <img src={props.data.imgUrl} alt=""/>
                            <div className={classes.text}>
                                <span className={classes.price}>{props.data.price} ₴</span>
                                <div className={classes.name}>
                                    <strong>{props.data.title}</strong> {props.data.subtitle}
                                </div>
                                <ul className={classes.description}>
                                    {props.data.description.map((entry: any, i: number) => { return <li key={i}> {entry} </li>})}
                                </ul>            
                            </div>
                        </div>
                        <div className={classes.buttWrapper}>
                            
                            {content()}

                                <Button  onClick={handleClickAdd}>
                                    Додати в кошик
                                    </Button>

                        </div>

                    </article>
            );
}