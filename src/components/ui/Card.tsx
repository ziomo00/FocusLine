import type {ReactNode} from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
}

function Card({children, className=""}: CardProps){
    return(
        <article
            className={`
                overflow-hidden rounded-[28px] border border-white/65
                shadow-[0_22px_48px_rgba(23,23,38,0.20)]
                ${className}
            `}
        >
        <div className="p-6">
            {children}
        </div>
        </article>
    );
}

export default Card;