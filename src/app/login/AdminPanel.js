"use client";
import React from 'react'
import {AppBar,Toolbar,styled,Box, Button} from '@mui/material'
import CustomButtons from './CustomButtons.js';
import MessageByAdmin from './MessageByAdmin.js';
import './AdminPanel.css'

const AdminPanel = () => {
  
  const StyledHeader = styled(AppBar)`
  background: white;
  height:80px;
`

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 5%;
`

  return (
    <>
    <div>
    <StyledHeader>
        <Toolbar style={{marginTop: "8px",display:"flex",justifyContent:"space-between"}}>
          <CustomButtonWrapper>
            <CustomButtons/>
          </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
    </div>
    <h1>
      All Messages will Show here!
    </h1>
    <div className='messageAdmin'>  
      <MessageByAdmin/>
      <MessageByAdmin/>
    </div>
    <p style={{textAlign:"center",marginTop:"1rem"}}>All Rights Reserved by Sawan Rawat</p>
    </>
  )
}

export default AdminPanel