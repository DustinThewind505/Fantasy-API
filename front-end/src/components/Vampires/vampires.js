import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VampireCard from './vampireCard';

function VampireList(props) {
    // ========== STATE ==========
    const [vampires, setVampires] = useState([])

    // ========== FUNCTIONS ==========
    useEffect(() => {
        axios.get('http://localhost:8001/vampires')
        .then(res => {
            console.log(res.data)
            setVampires(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    // ========== COMPONENT ==========
    return (
        <div>
            <h2>Vampires ☠</h2>
            <section className='cardContainer'>
            {vampires.map(vampire => <VampireCard key={vampire.vampireID} vampireProps={vampire} />)}
            </section>
        </div>
    )
}

export default VampireList;
