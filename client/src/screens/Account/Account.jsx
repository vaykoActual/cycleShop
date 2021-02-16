import { signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import React, { useState } from 'react'
import './Account.css'
import Layout from '../../components/shared/Layout/Layout'
import { NavLink } from 'react-router-dom'

function Account(props) {
    const history = useHistory() //?

    const [form, setForm] = useState({
        username: '',
        password: '',
        isError: false,
        errorMsg: ''
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSignIn = event => {
        event.preventDefault()

        const { setUser } = props

        signIn(form)
            .then(user => { //?
                setUser(user)
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                setForm({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }


    // const renderError = () => {
    //     const toggleForm = form.isError ? 'danger' : ''
    //     if (form.isError) {
    //         return (
    //             <button type="submit" className={toggleForm}>
    //                 {form.errorMsg}
    //             </button>
    //         )
    //     } else {
    //         return <button type="submit">SIGN IN</button>
    //     }
    // }

    const { username, password } = form

    return (
        <div className={form.isError ? 'danger' : ''}>
            <Layout user={props.user}>
                <div className="signin-container">
                    <h1>Sign In</h1>
                    <form onSubmit={onSignIn}>
                        <label> Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            value={username}
                            placeholder=""
                            onChange={handleChange}
                        />
                        <label> Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={password}
                            placeholder=""
                            onChange={handleChange}
                        />
                        <button type="submit">SIGN IN</button>
                    </form>

                    <div className="sigin-or">
                        <div>----------------OR----------------</div>
                        <div id="newAcc-link" >
                            <NavLink to="/signup" id="link-none">
                                Create Account
                            </NavLink>
                        </div>
                        {/* <div>Contact</div> */}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Account