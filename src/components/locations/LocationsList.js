import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import "./Locations.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])
  

    useEffect(
        //function useEffect displays state
        () => {
            // console.log("Initial state of tickets", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

 
    return <>
   
       <h2>Our Korner Locations</h2>

<article className="locations">
    {
        locations.map(
            (location) => {
                return <section className="location" key={`location--${location.id}`}>
                    <header>Address: {location.address}</header>
                    <footer>Store Size: {location.squareFt} square feet</footer>
                </section>
            }
        )
    }
</article>
    </>
}