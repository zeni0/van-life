
import React from "react"
import { useParams, useLocation, Link } from "react-router-dom"


export default function VanDetail() {
    
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState([])
    console.log(location, "location")

    console.log(params)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.vans)
                return setVan(data.vans)
            })
    }, [])

    const search = location.state?.search || ""

    return (
        <div className="van-detail-container">
            <Link
                to={`..?${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}