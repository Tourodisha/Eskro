import React, {createContext,useContext,useState } from "react"
const stateContext=createContext();

// for all navbar icons are currently open or closed
const initialState={
    settings:false,
    account:false,
    notification:false,
}

export const Contextprovider=({children})=>{
    const [activemenu, setactivemenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);
    const [isClicked, setisClicked] = useState(initialState)
    const [currentColor, setCurrentColor] = useState('#03C9D7');

    const setColor=(color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode',color)
    }
return (
    <stateContext.Provider
    value={{activemenu,setactivemenu,screenSize,setscreenSize,currentColor,setCurrentColor,setColor,isClicked, setisClicked}}
    >
        {children}
    </stateContext.Provider>
)
}
export const useStateContext=()=>useContext(stateContext);