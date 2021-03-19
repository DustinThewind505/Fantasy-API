import React, { useState } from 'react';
import axios from 'axios';


import SlayerCard from './slayerCard';


function Slayers({ vampires, slayers, setSlayers }) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        slayerName: '',
        slayerWeapon: '',
        vampireID: ''
    })


    // ========== FUNCTIONS ==========
    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8001/slayers', formData)
            .then(count => {
                axios.get('http://localhost:8001/slayers')
                    .then(res => {
                        setSlayers(res.data);
                        setFormData({
                            slayerName: '',
                            slayerWeapon: '',
                            vampireID: ''
                        });
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        const newSlayer = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newSlayer)
    }


    // ========== COMPONENT ==========
    return (
        <div>
            <h2>Slayers 🐱‍👤</h2>
            <form onSubmit={handleSubmit}>
                <p>/POST request</p>
                <label>
                    <input type='text' name='slayerName' placeholder='name' onChange={handleChange} required />
                </label>
                <label>
                    <input type='text' name='slayerWeapon' placeholder='weapon' onChange={handleChange} required />
                </label>
                <label>
                    <select name='vampireID' onChange={handleChange} required >
                        <option value=''>== Choose One ==</option>
                        {vampires.map(vampire => <option key={vampire.vampireID} value={vampire.vampireID} >{vampire.vampireName}</option>)}
                    </select>
                </label>
                <button>Add Slayer</button>
            </form>
            <section className='cardContainer'>
                {slayers.map(slayer => <SlayerCard key={slayer.slayerID} slayer={slayer} setSlayers={setSlayers} />)}
            </section>
        </div>
    )
}

export default Slayers;
