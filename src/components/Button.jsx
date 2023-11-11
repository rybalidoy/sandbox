
export default function Button({ children, ...props }) {

    const classes = "mt-2 px-7 py-4 text-xs md:text-xl rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600";

    return(
        <button className={classes}{...props}>{children}</button>
    );
}