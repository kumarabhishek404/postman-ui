import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const BackdropComp = () => {
  const [isInput, setIsInput] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setIsInput(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setIsInput(!isInput)
  }

  return (
    <div>
      <div>
        {/* <Button>Show backdrop</Button>
        <CircularProgress color="inherit" /> */}
        <p onClick={handleOpen}>Input</p>
            <input onClick={handleOpen} />
      </div>
    </div>
  );
}

export default BackdropComp;