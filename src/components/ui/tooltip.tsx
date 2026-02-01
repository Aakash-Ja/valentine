import React, { createContext, useContext } from 'react'

const TooltipContext = createContext(null)

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipContext.Provider value={null}>
      {children}
    </TooltipContext.Provider>
  )
}
