import {useEffect, useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title=`+${count} Aura!`
    },[count])

    return (
        <>
        <p>aLEXA, ligar aura... {count}!</p>
        <button onClick={() => setCount(count+1)}>
            Contar + 1
        </button>
        </>
    )
}

export default Counter

