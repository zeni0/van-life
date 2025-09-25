
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo(props) {
    
    const { van } = useOutletContext()
    console.log(van, "van details")
    return (
        <>
        <p><strong>Name:</strong> {van.name}</p>
        <p><strong>Category:</strong> {van.type}</p>
        <p><strong>Description:</strong> {van.description}</p>
        </>
    )
}