import * as React from 'react';
import * as N from './structure'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';
import About from '../../Assets/images/9447818.png'
import githubBackground from '../../Assets/images/133268513-5bfe2f93-4402-42c9-a403-81c9e86934b6.jpeg'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <a onClick={handleOpen}>
        <MenuItem>
          <ListItemIcon>
           <img className='iconimage' src={About} />
          </ListItemIcon>
        </MenuItem>
        </a>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
         
         
       <N.ModaLinformation>
        <img className='backgroundModal'  src={githubBackground} />
          <h1>About integration- github Api search Full profile</h1>
      
             <h6>Search GitHub users by username.
                 View relevant user information based on your search. Search for the user and navigate to their profile directly from here.</h6>
       </N.ModaLinformation>
  
      </Modal>
    </div>
  );
} 