import classes from './ButtonLink.module.css'

interface iButtonLink {
    Ref: string;
    children: any[] | any;
    
}

export const ButtonLink: React.FC<iButtonLink> = (props:iButtonLink) => {
    return (
        <div className={classes.butt}>
    <a href={props.Ref}>{props.children}</a>
</div>

    );
}