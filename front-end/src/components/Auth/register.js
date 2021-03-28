import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RegisterForm() {
    // ========== STATE ==========
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        userRole: ''
    })

    // ========== FUNCTIONS ==========
    useEffect(() => {

        axios.get('http://localhost:8001/auth/users')
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log('The Error ====>', err)
            })

        axios.get('http://localhost:8001/auth/roles')
            .then(rolesArray => {
                setRoles(rolesArray.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8001/auth/register', formData)
            .then(count => {
                axios.get('http://localhost:8001/auth/users')
                    .then(res => {
                        console.log(res.data)
                        setUsers(res.data)
                    })
                    .catch(err => {
                        console.log('The Error ====>', err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }


    // ========== COMPONENT ==========
    return (
        <div>
            <h2>Register Form component</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName: <input type='text' name='username' onChange={handleChange} />
                </label>
                <label>
                    Password: <input type='password' name='password' onChange={handleChange} />
                </label>
                <select name='userRole' onChange={handleChange} >
                    <option value=''>== Choose One ==</option>
                    {roles.map(role => <option key={role.roleID} value={role.roleID} >{role.roleName}</option>)}
                </select>
                <button type='submit'>Register</button>
            </form>
            <section className='cardContainer'>
                {users.map(user =>
                    <div key={user.userID} className='characterCard'>
                        <h3>Username: {user.username}</h3>
                        <p>Password: {user.password}</p>
                        <p>Role: {user.userRole}</p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default RegisterForm;
