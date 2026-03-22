import React from "react";
import data from "../data.json";
import Cards from "./cards.jsx";
import "../App.css";

function App() {
    return (
        <div >
            <h1 >Desserts</h1>
            <div className='items-right'>

                    {data.map(items => (
                        <Cards key={items.id} {...items} />
                    ))}

            </div>
            <div  className='items-left'>

            </div>
        </div>
    );
}

export default App;