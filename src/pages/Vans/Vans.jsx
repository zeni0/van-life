
import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    console.log(typeFilter)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
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
            <h1>Explore our van options</h1>
            <button 
                className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                onClick={() => setSearchParams({type: "simple"})}>simple</button>
            <button    
                className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                onClick={() => setSearchParams({type: "luxury"})}>luxury</button>
            <button 
                className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                onClick={() => setSearchParams({type: "rugged"})}>rugged</button>
            {typeFilter &&
                <button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear filter</button>
            }
            <div className="vans-container">
                {vans.filter(van => !typeFilter || van.type.toLowerCase() === typeFilter)
                .map(van => (
                    <div className="van" key={van.id}>
                        <Link 
                            to={van.id}
                            state={{search : searchParams.toString(), type: typeFilter}}    
                        >
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