
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
    
    const { van } = useOutletContext()

    return (
        <>
        <p>${van.price}/day</p>
        </>
    )
}