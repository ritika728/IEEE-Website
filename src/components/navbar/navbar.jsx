import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './navbar.css'
import './home.css'
import './countdown.css'
// import './countdown.js'


export default function DrawerAppBar(props) {
 
  const drawerWidth = 240;
  const navItems = ['HOME','ABOUT', 'EVENTS','SPONSORS','TEAM','CONTACT'];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img className='logo'  alt="loading.." />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <a className='drawerLink' sx={{ textAlign: 'center' }} href={"#"+item}>{item}</a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" id="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            {navItems.map((item) => (
              
              <a href={"#"+item} key={item} sx={{ color: '#fff' }}>{item}</a>
                
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }} id="HOME">
        <Toolbar />
        <Typography component={'div'}>

          <div id="HOME" >
            <div className='content1' id='mobileabout'>
            <div className='clockflex'>
            <div className='main_head'>
              {/* <h3 className='animatedhead'>IEEE DELHI STUDENT SECTION NETWORK PRESENTS</h3> */}
              <h3 className='animatedhead'>IEEE DELHI STUDENT SECTION NETWORK PRESENTS</h3>
              <div> <h1>RAJASTHAN SUBSECTION CONGRESS'23</h1>
              <h4>IEEE STUDENT BRANCH MODY UNIVERSITY OF SCIENCE AND TEHNOLOGY</h4></div>
            </div>
            <div id="clockdiv">
            <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
</div>
            <div className="photo">
            <img className="image"  style={{height:"280px"}}src={require('./animation.png')} alt="alternate" />
          </div>
          </div>
            <div className='main_head_mobile'>
              {/* <h3 className='animatedhead'>IEEE DELHI STUDENT SECTION NETWORK PRESENTS</h3> */}
              <h3 className='animatedhead' id='ssn'>IEEE DELHI STUDENT SECTION NETWORK PRESENTS</h3>
              <div> <h1 id='name_congress'>RAJASTHAN SUB-SECTION CONGRESS'23</h1>
              <h4 id='desc'>IEEE STUDENT BRANCH </h4><p id='mody'>MODY UNIVERSITY OF SCIENCE AND TEHNOLOGY</p></div>
            </div>
            <div id="clockdivmobile">
            <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
            </div>
            <div className='register' id='registermobile'> 
               <button className='custom-btn btn-3' id='custombtnmobile'><span>REGISTER HERE</span></button> 
               <button className='custom-btn btn-3' id='custombtnmobile1'><span>CODE OF CONDUCT</span></button> 
             </div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        
        </Typography>
      </Box>
    </Box>
  );
}