import classes from './Catalog.module.css'
import React from 'react';

interface iCatalog {
    children: any[];
    ID: string;
    Title: string;
    

}

export const Catalog: React.FC<iCatalog> = (props: iCatalog) => {

    return (

    <section id={props.ID} className={classes.catalog_whole} >
    <div className={classes.header_text}>
                <div className={classes.wrapper}>
                    <h2>{props.Title}</h2>
                </div>
            </div>
            <section className={classes.catalog}>
                {props.children}                
            </section>

</section>
    );
}