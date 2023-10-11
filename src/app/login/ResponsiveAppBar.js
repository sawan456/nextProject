import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { signOut,useSession } from 'next-auth/react'

function ResponsiveAppBar() {
  
  const session = useSession();  

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   
       <>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="LogOut...">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={session.data.user.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                    <Typography textAlign="center" style={{fontSize:"1.4rem",fontStyle:"italic"}}>{session.data.user.name}</Typography>
                  <MenuItem onClick={handleCloseUserMenu}>
                  
                  <Typography textAlign="center">
                    <Button style={{cursor:"pointer"}} variant="outlined" color="error"
                    onClick={()=>signOut("google")}
                    >LogOut</Button>
                  </Typography>
                  </MenuItem>
                
            </Menu>
          </Box>
      </>
      
  );
}
export default ResponsiveAppBar;