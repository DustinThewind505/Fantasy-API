import React from 'react';



function VampireCard({ vampireProps }) {




    return(
        <div className='characterCard'>
            <h3>Name: {vampireProps.vampireName}</h3>
            <p>Weakness: {vampireProps.vampireWeakness}</p>
            <p>Age: {vampireProps.vampireAge}</p>
        </div>
    )
}

export default VampireCard;
