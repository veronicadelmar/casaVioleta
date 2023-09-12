import { createContext } from "react";

export const ScrollContext = createContext()

export default function ScrollContextProvider({ children }) {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const data = {
        goToTop
    }

    return <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
}