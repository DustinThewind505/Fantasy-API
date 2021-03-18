import React from 'react';



function SlayerList() {
    // ========== STATE ==========


    // ========== FUNCTIONS ==========


    // ========== COMPONENT ==========
    return(
        <>
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
                        {props.vampires.map(vampire => <option key={vampire.vampireID} value={vampire.vampireID} >{vampire.vampireName}</option>)}
                    </select>
                </label>
                <button>Add Slayer</button>
            </form>
            <section className='cardContainer'>
            {slayers.map(slayer => <SlayerCard key={slayer.slayerID} slayerProps={slayer} />)}
            </section>
        </>
    )
}




