
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const NewProductForm = () => {
    const [productTypes, setTypes] = useState([])
    const [product, update] = useState({
        name: "",
        productTypeId: (0),
        price: "",

    })

    const navigate = useNavigate()
    useEffect(
        //function useEffect displays state
        () => {
            // console.log("Initial state of tickets", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/productTypes`)
                .then(response => response.json())
                .then((typeArray) => {
                    setTypes(typeArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            name: product.name,
            productTypeId: parseInt(product.productTypeId),
            price: product.price
        }

        return fetch('http://localhost:8088/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })

    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">Add New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Product Name"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />

                </div>
            </fieldset>
            <fieldset className="typeList">
                <label htmlFor="type">Select Product Type</label>
                {productTypes.map(
                    (productType) => {
                        return <div className="form-group">
                            <input
                                onChange={
                                    (evt) => {
                                        const copy = { ...product }
                                        copy.productTypeId = parseInt(evt.target.value)
                                        update(copy)
                                    }
                                } type="radio" value={productType.id} name="type" /> {productType.type}
                        </div>
                    }
                )}

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Product Price</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Product Price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.price = evt.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save New Product
            </button>
        </form>
    )
}