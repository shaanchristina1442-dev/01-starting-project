export default function TabButton({children, onSelect}){
    function handleClick(){
        console.log(`You clicked on a new button`);
    }

    return(
        <div>
            <li>
                <button onClick = {onSelect}>
                    {children}
                </button>
            </li>
        </div>
    );
}