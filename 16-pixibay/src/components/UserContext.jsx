import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    const isFavourite = (item) => favourites.find(i => i.id == item.id)
    const addToFavourites = (item) => setFavourites(f => f.concat(item))
    const removeFavourite = (item) => setFavourites(f => f.filter(i => i.id != item.id))
    const toggleFavourite = (item) => () => isFavourite(item) ? removeFavourite(item) : addToFavourites(item)

    return (
        <UserContext.Provider value={{ favourites, isFavourite, toggleFavourite }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
