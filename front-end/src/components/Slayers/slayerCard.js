import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function SlayerCard({ slayer, setSlayers}) {

const handleDelete = e => {
    axios.delete(`http://localhost:8001/slayers/${slayer.slayerID}`)
    .then(count => {
        axios.get('http://localhost:8001/slayers')
        .then(res => {
            setSlayers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
}



    return(
        <div className='characterCard'>
            <h3>Name: {slayer.slayerName}</h3>
            <p>Weapon: {slayer.slayerWeapon}</p>
            <p>Nemesis: {slayer.vampireName}</p>
            <footer><Link to={`/slayers/${slayer.slayerID}`}>Edit</Link><button onClick={handleDelete}>Delete</button></footer>
        </div>
    )
}

export default SlayerCard;
