import React, { createContext } from 'react'

export const myContext = createContext();

const Context = ({children}) => {
    const z = '10';
  return (
    <myContext.Provider value={{z}}>
        {children}
    </myContext.Provider>
  )
}

export default Context