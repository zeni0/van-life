
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    console.log(typeFilter)
    
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
                            state={{search : searchParams.toString()}}    
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