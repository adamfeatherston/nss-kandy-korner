import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../locations/LocationsList"
import { ProductsList } from "../products/ProductsList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Best Kandy on this Korner</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationsList /> } />
				<Route path="products" element={ <ProductsList /> } />

            </Route>
        </Routes>
    )
}

