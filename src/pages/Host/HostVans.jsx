import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function HostVans() {
    
    const [hostVans, setHostVans] = useState([])
    
    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
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