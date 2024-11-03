import { useState } from "react";

const Counter = () =>{
    const [counter,setConter] = useState(0);

    const changeCounter = (e) =>{
        // console.log(e.target.id);
        if(e.target.id === 'plus'){
            if(counter < 10){
                setConter(counter + 1)   
            }
        }else{
            if(counter > 0){
                setConter(counter - 1)
            }
        }

    }


    return(
        <>
        <h3>Total Count is {counter}</h3>
        <button onClick={changeCounter} id="plus">Add {counter}</button>
        <button onClick={changeCounter} id="minus">Minus {counter}</button>
        </>
    )
}

export default Counter;