
import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data.vans)
                return setVans(data.vans)
            })
    }, [])
    
    return (
        <>
            <h1>Explore our van options</h1>
            <div className="vans-container">
                {vans.map(van => (
                    <div className="van" key={van.id}>
                        <Link to={`/vans/${van.id}`}>
                            <img src={van.imageUrl} />
                            <div className="van-info">
                                <h3>{van.name}</h3>
                                <span><strong>${van.price}</strong><br/>/day</span>
                            </div>
                            <span className={`badge ${van.type}`}>{van.type}</span>
                        </Link>
                    </div> 
                ))}
            </div>
        </>
    )
}