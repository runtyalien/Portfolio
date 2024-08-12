"use client"

import React from 'react'
import useScreenSize from './hooks/useScreenSize'

const ResponsivComponent = ({ children }) => {
    const size = useScreenSize();
  return (
    <>
      {children({ size })}
    </>
  )
}

export default ResponsivComponent
