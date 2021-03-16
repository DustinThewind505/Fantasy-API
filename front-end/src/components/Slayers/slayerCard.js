import React from 'react';



function SlayerCard({ slayerProps }) {




    return(
        <div className='characterCard'>
            <h3>Name: {slayerProps.slayerName}</h3>
            <p>Weapon: {slayerProps.slayerWeapon}</p>
            <p>Nemesis: {slayerProps.vampireName}</p>
        </div>
    )
}

export default SlayerCard;
