import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Restaurant from '@mui/icons-material/Restaurant';
import Account from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius:'3%',
    boxShadow: 24,
    p: 4,
  };
  

function Nav() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const navigate=useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleHome = () => {
    navigate('/Home')
  };
  const handleAbout = () => {
    navigate('/About')
  };
  const handleContact = () => {
    navigate('/Contact')
  };

  return (
    <>
    <AppBar position="static" sx={{width:'100vw'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Restaurant sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FooDle
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Restaurant sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FooDle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'end' } }}>
            
              <Button onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    Home
                
              </Button>
              <Button onClick={handleAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                  About
              </Button>
              <Button onClick={handleContact}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    Contact 
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <IconButton sx={{ p: 0 }} onClick={handleOpen}  >
              <Account sx={{ display: { xs: 'none', md: 'flex',color:'#fff',marginLeft:'3rem' } }} />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
     
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'blue'}}>
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" sx={{my:1,width:'100%'}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{my:1,width:'100%'}}/>
          <Button variant="contained" sx={{my:1,width:'100%'}} >Submit</Button>
          </Typography>
        </Box>
      </Modal>


    </>
  );
}
export default Nav;