import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VampireCard from './vampireCard';

function VampireList(props) {
    // ========== STATE ==========
    const [vampires, setVampires] = useState([])
    const [formData, setFormData] = useState({
        vampireName: '',
        vampireWeakness: '',
        vampireAge: null
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8001/vampires', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        setFormData({
            vampireName: '',
            vampireWeakness: '',
            vampireAge: ''
        })
    }

    const handleChange = e => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormData)
    }


    // ========== COMPONENT ==========
    return (
        <div>
            <h2>Vampires ☠</h2>
            <form onSubmit={handleSubmit}>
                <p>/POST request</p>
                <label>
                    <input type='text' name='vampireName' placeholder='name' onChange={handleChange} required />
                </label>
                <label>
                    <input type='text' name='vampireWeakness' placeholder='weakness' onChange={handleChange} required />
                </label>
                <label>
                    <input type='number' name='vampireAge' placeholder='age' onChange={handleChange} required />
                </label>
                <button>Add Vampire</button>
            </form>
            <section className='cardContainer'>
                {vampires.map(vampire => <VampireCard key={vampire.vampireID} vampireProps={vampire} />)}
            </section>
        </div>
    )
}

export default VampireList;
