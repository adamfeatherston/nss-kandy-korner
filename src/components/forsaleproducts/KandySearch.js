import "./Kandies.css"
export const KandySearch = ({ setterFunction }) => {
    return (
        <div className="search">
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="What candy are you looking for?" />
        </div>
    )
}