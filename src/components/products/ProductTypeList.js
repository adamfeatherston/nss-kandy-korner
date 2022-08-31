// //for customers

// import { useEffect, useState } from "react"
// // import { useNavigate } from "react-router-dom"
// import "./TypeList.css"

// export const ProductTypeList = () => {
//     const [locations, setLocations] = useState([])
//     // const navigate = useNavigate()

//     useEffect(
//         //function useEffect displays state
//         () => {
//             // console.log("Initial state of tickets", tickets) // View the initial state of tickets
//             fetch(`http://localhost:8088/products`)
//                 .then(response => response.json())
//                 .then((productArray) => {
//                     setLocations(productArray)
//                 })
//         },
//         [] // When this array is empty, you are observing initial component state
//     )
//     return <>
//        <h2>Kandy Types</h2>

// <article className="products">
//     {
//         locations.map(
//             (location) => {
//                 return <section className="product" key={`product--${location.id}`}>
//                     <header>Address: {location.address}</header>
//                     <footer>Store Size: {location.squareFt} square feet</footer>
//                 </section>
//             }
//         )
//     }
// </article>
//     </>
// }