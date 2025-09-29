import React, {useState,useContext} from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    OpenBuyWindow:(uid)=>{},
    CloseBuyWindow:()=>{},
})

export const GeneralContextProvider= (props) =>{
    const [isBuyWindowopen,setisBuyWindowopen]=useState(false)
    const [selectedStockId,setselectedStockId]=useState("")

    const handleOpenWindow= (uid)=>{
        setisBuyWindowopen(true)
        setselectedStockId(uid)
    }

    
    const handleCloseWindow= (uid)=>{
        setisBuyWindowopen(false)
        setselectedStockId("")
    }

    return (
        <GeneralContext.Provider value={{OpenBuyWindow:handleOpenWindow, CloseBuyWindow:handleCloseWindow}}>
            {props.children}
            {isBuyWindowopen && <BuyActionWindow uuid={selectedStockId}/> }
        </GeneralContext.Provider>
    )
}
export const useGeneralContext = () => useContext(GeneralContext);

export default GeneralContext