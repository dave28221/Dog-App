import React, { useState, useEffect } from 'react'


const FetchAPI = () => {

    const [show, setShow] = useState({});
    const [data, setData] = useState([]);

    const apiGet = () => {
        
        const API_KEY = "91181943-5a3a-4929-937c-7cb7b9fa32f9";
        fetch(`https://api.thedogapi.com/v1/images/search?limit=2&page=10&order=Desc?API_KEY=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => {
                setData([...data, ...json]);        
            });
            
    };

    useEffect(() => {           //call data when pagee refreshes/initially loads 
        apiGet();
        
    }, []);

    return (

        

        <div>
            
            {data.map((item, id) => (
                <div>
                    <img alt="dog photos" className="dogImg" src={item.url}></img>
                    {show[id] === false ?  <p class="increaseP">{JSON.stringify(item.breeds).replace(/]|[[]/g, '')}</p> : null} 
                    {show[id] === false && item.breeds.length === 0  ? <p>No information for this breed is available</p> : null} 
                    <button onClick={() => setShow((prev) => ({ ...prev, [id]: false }))}>Click to Learn more!</button>
                    <button onClick={() => setShow((prev) => ({ ...prev, [id]: true }))}>Hide information</button>
                </div>

            ))}
        </div>

    )
}

export default FetchAPI;
