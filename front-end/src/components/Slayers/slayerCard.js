import React from 'react';
import { Link } from 'react-router-dom';


function SlayerCard({ slayerProps }) {




    return(
        <div className='characterCard'>
            <h3>Name: {slayerProps.slayerName}</h3>
            <p>Weapon: {slayerProps.slayerWeapon}</p>
            <p>Nemesis: {slayerProps.vampireName}</p>
            <footer><Link to={`/slayers/${slayerProps.slayerID}`}>Edit</Link></footer>
        </div>
    )
}

export default SlayerCard;
