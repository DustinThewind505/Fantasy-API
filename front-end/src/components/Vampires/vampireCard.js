import axios from 'axios';
import { Link } from 'react-router-dom';


function VampireCard({ vampires, setVampires }) {
    // ========== STATE ==========


    // ========== FUNCTIONS ==========
    const handleDelete = id => {
        axios.delete(`http://localhost:8001/vampires/${vampires.vampireID}`)
            .then(count => {

                axios.get('http://localhost:8001/vampires')
                    .then(res => {
                        console.log(res);
                        setVampires(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // ========== COMPONENT ==========
    return (
        <div className='characterCard'>
            <h3>Name: {vampires.vampireName}</h3>
            <p>Weakness: {vampires.vampireWeakness}</p>
            <p>Age: {vampires.vampireAge}</p>
            <footer><Link to={`/vampires/${vampires.vampireID}`}>Edit</Link><button onClick={handleDelete}>Delete</button></footer>
        </div>
    )
}

export default VampireCard;
