import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("S family");
    // const [name, setName] = useState("");
    const handleadd = () => {
        setCount(count + 1);
        // setName("Arun");
        if (count > 5 ) {
            if (name == 'Indhu') 
            {
                setName("Jegan");
            }
        
             else if (name == 'Jegan') {
            setName("Sutha");
             }
            else if (name == 'Sutha') {
            
                setName("Indhu");
            }
        
          else {
            setName("Enter a name");
           }

    }
}

return (
    <div>
        <h1>Counter - {count}</h1>
        <h1>{name}</h1>

        <button onClick={handleadd}>Count</button>

    </div>
);
}

export default Counter