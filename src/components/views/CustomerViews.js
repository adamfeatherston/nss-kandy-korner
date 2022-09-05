import { Outlet, Route, Routes } from "react-router-dom"
import { KandyContainer } from "../forsaleproducts/KandyContainer"
import { LocationsList } from "../locations/LocationsList"

export const CustomerViews = () => {
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
				<Route path="kandies" element={ <KandyContainer /> } />
				
            </Route>
        </Routes>
    )
}