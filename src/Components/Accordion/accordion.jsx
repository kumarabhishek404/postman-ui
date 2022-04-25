import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComp = (props) => {
  return (
    <div>
      <Accordion sx={{
        // border: '2px solid red',
        backgroundColor: 'transparent',
        width: '75%',
        boxShadow: 'none'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{flexDirection: 'row-reverse', miHeight: '44px'}}
        >
          <Typography sx={{ padding: '0px', margin: '0px', fontSize: '10px' }}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{margin: '0px', padding: '0px'}}>
          {
            props.items.map((item, index) => {
              return <Typography>
                <div className='sidebar_container_2_history d-flex ml-4 mt-2'>
                  <p className='m-0 p-0 mr-1 text-success'>
                    {item.method}
                  </p>
                  <p className='sidebar_container_2_history_link p-0 m-0 mr-2'>
                    {item.link}
                  </p>
                </div>
              </Typography>
            })
          }
          {/* <Typography>
            1
          </Typography>
          <Typography>
            2
          </Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComp;