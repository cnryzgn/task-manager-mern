import { createContext, useContext } from "react"

const DataContext = createContext<any>({})

export {
    DataContext,
    useContext
}