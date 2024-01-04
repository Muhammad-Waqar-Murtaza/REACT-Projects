import React, { createContext, useState } from 'react'

export const CartArray = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])

  return (
    <CartArray.Provider value={{cart, setCart}}>{children}</CartArray.Provider>
  )
}

export default Context