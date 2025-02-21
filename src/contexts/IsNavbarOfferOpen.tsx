import { ReactNode, createContext, useContext, useState } from "react";

interface IsNavbarOfferOpenInterface {
    isNavbarOfferOpen: boolean,
    toggle: Function,
    open: Function,
    close: Function
}

const IsNavbarOfferOpen = createContext<IsNavbarOfferOpenInterface | null>(null)

function useIsNavbarOfferOpen() {
    const [isNavbarOfferOpen, setIsNavbarOfferOpen] = useState(false)
    const open = () => setIsNavbarOfferOpen(true)
    const close = () => setIsNavbarOfferOpen(false)
    const toggle = () => setIsNavbarOfferOpen(!isNavbarOfferOpen)
    return {
        isNavbarOfferOpen,
        toggle,
        open,
        close
    }
}

export function useIsNavbarOfferOpenContext() {
    const context = useContext(IsNavbarOfferOpen)
    if(!context) {
        throw new Error("Component should be placed in IsNavbarOfferOpenContextProvider")
    }
    return context
}

export function IsNavbarOfferOpenContextProvider({children} : {children: ReactNode}) {
    const {isNavbarOfferOpen, toggle, open, close} = useIsNavbarOfferOpen()
    return(
        <IsNavbarOfferOpen.Provider value={{isNavbarOfferOpen, toggle, open, close}}>{children}</IsNavbarOfferOpen.Provider>
    )
}