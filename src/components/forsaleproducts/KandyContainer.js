import { useState } from "react"
import { CustomerKandies } from "./CustomerKandies"
import { KandySearch } from "./KandySearch"


export const KandyContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <KandySearch setterFunction={setSearchTerms} />
        < CustomerKandies searchTermState={searchTerms} />
    </>
}