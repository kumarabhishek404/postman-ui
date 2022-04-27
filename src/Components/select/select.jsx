import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Inheri auth from parent',
  },
  {
    value: 'EUR',
    label: 'No Auth',
  },
  {
    value: 'BTC',
    label: 'API Key',
  },
  {
    value: 'JPY',
    label: 'Bearer Token',
  },
];

const Select = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      width={'100px'}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label=" "
          value={currency}
          onChange={handleChange}
          sx={{
            // padding: '5px !important',
            // width: '100px',
            fontSize: '10px !important'
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      </div>
    </Box>
  );
}

export default Select;