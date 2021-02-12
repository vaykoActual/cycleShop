import React, { useState } from 'react'
import './MotorcycleSell.css'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { createMotorcycle } from '../../services/products'


function MotorcycleSell(props) {

    const [motorcycle, setMotorcycle] = useState({
        brand: '',
        description: '',
        imgURL: '',
        name: '',
        price: ''
    })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setMotorcycle({
            ...motorcycle,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createMotorcycle(motorcycle)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to='/' />
    }
    return (
        <Layout user={props.user}>
            <form className="create-form" onSubmit={handleSubmit}>
                <h1>Create new motorcycle </h1>
                <input
                    className="input-name"
                    placeholder='Name'
                    value={motorcycle.name}
                    name='name'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-price"
                    placeholder='Price'
                    value={motorcycle.price}
                    name='price'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-description"
                    rows={10}
                    placeholder='Description'
                    value={motorcycle.description}
                    name='description'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={motorcycle.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default MotorcycleSell