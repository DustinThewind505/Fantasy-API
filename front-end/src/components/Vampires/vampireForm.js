import React, { useState } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


function VampireForm({ vampires, setVampires }) {
    const { params } = useRouteMatch();
    const history = useHistory();
    
    const foundVampire = vampires.find(vampire => vampire.vampireID === parseInt(params.id))
    console.log(foundVampire)
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        vampireName: foundVampire.vampireName,
        vampireWeakness: foundVampire.vampireWeakness,
        vampireAge: foundVampire.vampireAge
    })


    // ========== FUNCTIONS ==========
    const handleSubmit = e => {
        e.preventDefault();

        axios.put(`http://localhost:8001/vampires/${foundVampire.vampireID}`, formData)
            .then(count => {
                console.log(count.config)
                axios.get('http://localhost:8001/vampires')
                    .then(res => {
                        console.log(res.data)
                        setVampires(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => console.log(err.message))
        
        history.push('/vampires')
    }

    const handleChange = e => {
        const updatedForm = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(updatedForm)
    }


    // ========== COMPONENT ==========
    return (
        <div>
            <header>
                <Link to='/vampires'>⬅return</Link><h2>Vampire Form</h2>
            </header>

            <form onSubmit={handleSubmit}>
                <p>/PUT request</p>
                <label>
                    <input type='text' name='vampireName' placeholder='name' value={formData.vampireName} onChange={handleChange} required />
                </label>
                <label>
                    <input type='text' name='vampireWeakness' placeholder='weakness' value={formData.vampireWeakness} onChange={handleChange} required />
                </label>
                <label>
                    <input type='number' name='vampireAge' placeholder='age' value={formData.vampireAge} onChange={handleChange} required />
                </label>
                <button>Update Vampire</button>
            </form>
        </div>
    )
}

export default VampireForm;
