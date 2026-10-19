export default function TabButton({children}){
    function handleClick(){
        console.log(`You clicked on a new button`);
    }

    return(
        <div>
            <li>
                <button onClick = {handleClick}>
                    {children}
                </button>
            </li>
        </div>
    );
}