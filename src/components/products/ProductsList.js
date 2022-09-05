//for employees

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [sorted, setSorted] = useState([])
    const [listexpensiveProducts, updateExpensiveProducts] = useState(false)
    const [filteredProducts, setFiltered] = useState([])
    const navigate = useNavigate()


    useEffect(
        //function useEffect displays state
        () => {
            // console.log("Initial state of tickets", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/products?_expand=productType`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            const copy = structuredClone(products)
            copy.sort((a, b) => (a.name > b.name) ? 1 : -1)
            setSorted(copy)
        },
        [products]
    )

    useEffect(
        () => {
            setFiltered(sorted)
        },
        [sorted]
    )

    useEffect(
        () => {
            if (listexpensiveProducts) {
                const expensiveProducts = sorted.filter(product => product.price > 4)
                setFiltered(expensiveProducts)
            }
            else {
                setFiltered(sorted)
            }
        },
        [listexpensiveProducts]
    )

    return <>

        <h2>Korner Products</h2>

        <button onClick={() => {
            updateExpensiveProducts(!listexpensiveProducts)
        }}>
            {
                listexpensiveProducts
                    ? "Show All"
                    : "Top Priced"
            }
            </button>
            <button onClick={() => navigate("/product/create")}>Create New Product</button>
       
    
        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product" key={`product--${product.id}`}>
                            <header>Product Name: {product.name}</header>
                            <body>Price: ${product.price}.00</body>
                            <footer>Product Type: {product.productType.type}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}

