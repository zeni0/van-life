
import React, { createContext } from "react"
import { useParams, NavLink, Link, Outlet } from "react-router-dom"
import { getVan } from "../../api"

export const VanDetailContext = createContext()

export default function HostVanDetail() {
    
    const params = useParams()
    const [van, setVan] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    // React.useEffect(() => {
    //     fetch(`/api/host/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             return setVan(data.vans[0])
    //         })
    // }, [])

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [params.id])

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