import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SlayerCard from './slayerCard';


function SlayersList(props) {
    // ========== STATE ==========
    const [slayers, setSlayers] = useState([])

    // ========== FUNCTIONS ==========
    useEffect(() => {
        axios.get('http://localhost:8001/slayers')
            .then(res => {
                console.log(res.data)
                setSlayers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    // ========== COMPONENT ==========
    return (
        <div>
            <h2>Slayers 🐱‍👤</h2>
            <section className='cardContainer'>
            {slayers.map(slayer => <SlayerCard key={slayer.slayerID} slayerProps={slayer} />)}
            </section>
        </div>
    )
}

export default SlayersList;
