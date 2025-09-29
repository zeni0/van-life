import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"


export default function HostVans() {
    
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                console.log(data), "host vans"
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    
    return (
        <>
            <h1>Your listed vans</h1>
            <div className="host-vans-container">
                {hostVans.map(van => (
                    <Link key={van.id} to={van.id}>
                    <div className="van">
                        <img src={van.imageUrl} />
                        <div className="host-vans-info">
                            <h3>{van.name}</h3>
                            <span>${van.price}/day</span>
                        </div>
                    </div> 
                    </Link>
                ))}
            </div>
        </>
    )
}