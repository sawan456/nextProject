import {  Box ,styled } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar.js'
import React from 'react'

const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right:40px;
        font-size:16px;
        align-items:center;
    }
`

const CustomButtons = () => {

  return (
    <Wrapper>
        <ResponsiveAppBar/>
    </Wrapper>
  )
}

export default CustomButtons