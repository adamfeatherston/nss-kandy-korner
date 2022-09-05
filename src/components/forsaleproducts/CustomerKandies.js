import { useEffect, useState } from "react"

import "./Kandies.css"

export const CustomerKandies = ({searchTermState}) => {
    const [kandies, setKandies] = useState([])
    const [filteredKandies, setFiltered] = useState([])
  
    useEffect(
        () => {
            const searchedKandies = kandies.filter(kandy => {
                return kandy.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedKandies)
        },
        [ searchTermState ]
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((kandyArray) => {
                setKandies(kandyArray)
            })
        },
        []
    )

    return <>

    <h2>Korner Products</h2>

    <article className="products">
            {
                filteredKandies.map(
                    (product) => {
                        return <section className="product" key={`product--${product.id}`}>
                            <header>Product Name: {product.name}</header>
                            <body>Price: ${product.price}.00</body>
                            </section>
                    }
                )
            }
        </article>
    </>

}