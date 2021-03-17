import { Link } from 'react-router-dom';



function VampireCard({ vampireProps }) {
    // ========== STATE ==========
    

    // ========== FUNCTIONS ==========


    // ========== COMPONENT ==========
    return(
        <div className='characterCard'>
            <h3>Name: {vampireProps.vampireName}</h3>
            <p>Weakness: {vampireProps.vampireWeakness}</p>
            <p>Age: {vampireProps.vampireAge}</p>
            <Link to={`/vampires/${vampireProps.vampireID}`}>Edit</Link>
        </div>
    )
}

export default VampireCard;
