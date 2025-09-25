
import React, { createContext } from "react"
import { useParams, NavLink, Link, Outlet } from "react-router-dom"

export const VanDetailContext = createContext()

export default function HostVanDetail() {
    
    const params = useParams()
    const [van, setVan] = React.useState([])
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                return setVan(data.vans[0])
            })
    }, [])

    return (
        <div className="host-van-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {van ? (
                <section>
                    <div className="van">
                        <img src={van.imageUrl} />
                        <div className="host-van-info">  
                            <span className={`badge ${van.type} selected`}>{van.type}</span>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <nav className="host-van-detail-nav">
                        <NavLink end style={({isActive}) => isActive ? styles : null} to=".">Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? styles : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? styles : null} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={{van}} />
                </section>               
                
            ) : <h2>Loading...</h2>}
        </div>
    )
}