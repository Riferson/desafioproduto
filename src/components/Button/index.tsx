interface Props{
    title:string,
    excecutar?:() => void,
}
export function Button({excecutar,title}:Props){
    return(
        <>
            <input type='submit' value={title} onClick={excecutar}></input>
        </>
    );
}