import React ,{useState} from "react";
function Vieww() {
    const [data, setData] = useState(
       [ { name: 'Arun', age: 26 },
        { name: 'Mani', age: 24 },
        { name: 'Sundar', age: 23 },
    ]);


    return (
        <div>
            <h1>View</h1>
            {data.map((sa) => (
                <div>
                    <h1>{sa.name}</h1>
                    <h1>{sa.age}</h1>
                </div>

            ))}
        </div>
    )
}
export default Vieww