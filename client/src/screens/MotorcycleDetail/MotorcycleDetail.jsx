import Layout from "../../components/shared/Layout/Layout";
import { useParams, Link, NavLink, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getMotorcycle, deleteMotorcycle } from '../../services/products'
import './MotorcycleDetail.css'

function MotorcycleDetail(props) {
    const [motorcycle, setMotorcycle] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const [isUpdated, setUpdated] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getMotorcycle(id)
            setMotorcycle(product)
            setLoaded(true)
        }
        fetchProduct()
    }, [id])


    if (!isLoaded) {
        return <h1>Loading...</h1>
    }
    
    const handleDelete=(event)=>{
    event.preventDefault()
    const deleted =  deleteMotorcycle(motorcycle._id)
    setUpdated(deleted)
    }

    if (isUpdated) {
        return <Redirect to={`/brand/${motorcycle.brand}`} />
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
                        <h1>{motorcycle.name}</h1>
                        <img src={motorcycle.imgURL} />
                        <h3>{motorcycle.description}</h3>
                        <h4>{motorcycle.price}</h4>
                        <NavLink to={`/motorcycleedit/${id}`}> Edit</NavLink>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </Layout>
        </div>)
}
export default MotorcycleDetail;