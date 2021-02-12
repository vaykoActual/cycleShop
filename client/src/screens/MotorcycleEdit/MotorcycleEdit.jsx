import Layout from "../../components/shared/Layout/Layout";
import { useParams, Link, NavLink, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getMotorcycle, updateMotorcycle } from '../../services/products'

function MotorcycleEdit(props) {
    const [motorcycle, setMotorcycle] = useState([{
        brand: '',
        description: '',
        imgURL: '',
        name: '',
        price: ''
    }])
    const [isUpdated, setUpdated] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getMotorcycle(id)
            setMotorcycle(product)
        }
        fetchProduct()
    }, [id])

    console.log(motorcycle)

    const handleChange = (event) => {
        const { name, value } = event.target
        setMotorcycle({
            ...motorcycle,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(id)
        const updated = await updateMotorcycle(id, motorcycle)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/manage/${id}`} />
    }

    return (
        <div>
            <Layout>
                <div className="motorcycleDetail-container">
                    <div>
                        {motorcycle.brand === 'Arch' && <img src='https://www.archmotorcycle.com/assets/images/logo.png' />}
                        {motorcycle.brand === 'Harley Davidson' && <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png' />}
                        {motorcycle.brand === 'Yamaha' && <img src='https://www.archmotorcycle.com/assets/images/logo.png' />}
                        {motorcycle.brand === 'Ducati' && <img src='https://www.archmotorcycle.com/assets/images/logo.png' />}
                        {motorcycle.brand === 'BMW' && <img src='https://www.archmotorcycle.com/assets/images/logo.png' />}
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <h1>{motorcycle.name}</h1>
                            <img src={motorcycle.imgURL} />
                            <textarea
                                className="#"
                                placeholder='Description'
                                value={motorcycle.description}
                                name='description'
                                required
                                onChange={handleChange}
                            />
                            <input
                                className="#"
                                placeholder='Price'
                                value={motorcycle.price}
                                name='price'
                                required
                                onChange={handleChange}
                            />
                            <button type='submit'>Save</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>)
}
export default MotorcycleEdit