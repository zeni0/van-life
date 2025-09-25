
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
    
    const { van } = useOutletContext()
    
    return (
        <>
        <img width={100} src={van.imageUrl} />
        </>
    )
}