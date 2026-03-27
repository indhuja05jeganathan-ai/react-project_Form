import React from "react";
function Apicall() {
    const handleapi =async () => {
        let res = await fetch('https://fakestoreapi.com/products/1');
        let data = await res.json();
        console.log(data);
    }
    return (
        <div>
            <button onClick={handleapi}>Call</button>
        </div>
    )
}
export default Apicall