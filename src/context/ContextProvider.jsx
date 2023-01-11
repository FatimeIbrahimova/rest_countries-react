import { createContext, useEffect, useState } from "react";
// import "../index.css"

export const MainContext = createContext(null)

function ContextProvider({ children }) {
    const [mode, setMode] = useState("light");
    const [data, setData] = useState({})
    const values = {
        mode,
        setMode,
        data,
        setData
    }
    useEffect(() => {
        document.body.className = mode
    }, [mode])
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider >
    )
}
export default ContextProvider;