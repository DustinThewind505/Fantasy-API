import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RegisterForm() {
    // ========== STATE ==========
    const [message, setMessage] = useState();
    const [roles, setRoles] = useState();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: ''
    })

    // ========== FUNCTIONS ==========
    useEffect(() => {

        // axios.get('http://localhost:8001/auth/users')
        // .then(res => {
        //     console.log(res.data)
        //     // setMessage(res.data)
        // })
        // .catch(err => {
        //     console.log('The Error ====>', err)
        // })


        axios.get('http://localhost:8001/auth/roles')
        .then(rolesArray => {
            // console.log(rolesArray.data)
            setRoles(rolesArray.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const handleSubmit = e => {
        e.preventDefault();


    }

    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }

    console.log(roles)

    // ========== COMPONENT ==========
    return(
        <div>
            <h2>Register Form component</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName: <input type='text' name='username' onChange={handleChange} />
                </label>
                <label>
                   Password: <input type='password' name='password' onChange={handleChange} />
                </label>
                <select name='role'>
                    <option value=''>== Choose One ==</option>
                    {roles.map(role => <option key={role.roleID} value={role.roleID} >{role.roleName}</option>)}
                </select>
                <button type='submit'>Register</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default RegisterForm;
