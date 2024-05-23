import React from 'react'
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';
const Loadercard = () => {
  return (
<div
    xs={6}
    sm={6}
    className="upper-card text-shadow pulsate"
    style={{
      background: "#7257FF",
    }}
  ><LoadingOverlay visible={true} zIndex={1000} overlayProps={{  blur: 0 ,color:"#7257FF"}} /></div>
  )
}

export default Loadercard