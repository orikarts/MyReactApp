import React from 'react';
import { ButtonLink } from '../Button/ButtonLink';
import classes from './Banner.module.css'

interface iBanner {
    BgImage: string;
    Title: string;
    Subtitle: string;
    Ref?: string;
    ButtTitle: string;
    Link: string;
    
}

export const Banner: React.FC<iBanner> = (props:iBanner) => {
    return (
            <section style={{backgroundImage: 'url('+ props.BgImage + ')' }} className={classes.banner}>
                <div className={classes.wrapper}>
                    <div className={classes.text}>
                        <h2>{props.Title}</h2>
                        <p>{props.Subtitle}</p>
                    </div>
                    
                    <ButtonLink Ref={props.Link}>{props.ButtTitle}</ButtonLink>
                    

                </div>
            </section>
    );
}