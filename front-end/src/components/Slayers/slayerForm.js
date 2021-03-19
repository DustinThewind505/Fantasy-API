import React, { useState } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


function SlayerForm({ vampires, slayers, setSlayers }) {
    const { params } = useRouteMatch();
    const history = useHistory();

    const foundSlayer = slayers.find(slayer => slayer.slayerID === parseInt(params.id))

    // ========== STATE ==========
    const [formData, setFormData] = useState({
        slayerName: foundSlayer.slayerName,
        slayerWeapon: foundSlayer.slayerWeapon,
        vampireID: foundSlayer.vampireID
    })


    // ========== FUNCTIONS ==========
    const handleSubmit = e => {
        e.preventDefault();

        axios.put(`http://localhost:8001/slayers/${foundSlayer.slayerID}`, formData)
            .then(count => {
                console.log(count.config)
                axios.get('http://localhost:8001/slayers')
                    .then(res => {
                        setSlayers(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => console.log(err.message))

        history.push('/slayers')
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

            <div>
                <Link to='/slayers'>⬅return</Link><h2>Slayers Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <p>/PUT request</p>
                <label>
                    <input type='text' name='slayerName' placeholder='name' value={formData.slayerName} onChange={handleChange} required />
                </label>
                <label>
                    <input type='text' name='slayerWeapon' placeholder='Weapon' value={formData.slayerWeapon} onChange={handleChange} required />
                </label>
                <label>
                    <select name='vampireID' onChange={handleChange} required >
                        <option value=''>== Choose One ==</option>
                        {vampires.map(vampire => <option key={vampire.vampireID} value={vampire.vampireID} >{vampire.vampireName}</option>)}
                    </select>
                </label>
                <button>Update Slayer</button>
            </form>

        </div>
    )
}

export default SlayerForm;
