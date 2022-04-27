// import React, { Component } from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// const Dropdown = () => {
//   const [selection, setSelection] = React.state(1)

//   const handleChange = (event, index, value) => {
//     //set selection to the value selected
//     setSelection(value)
//   }

//   const pageControl = () => {
//     if (selection == 1) {
//       return (
//         <div>Hello</div>
//       );
//     } else if (selection == 2) {
//       return (
//         <div>Hola</div>
//       );
//     } else if (selection == 3) {
//       return (
//         <div>Bonjour</div>
//       );
//     }
//   }

//   return (
//     <div>
//       <MuiThemeProvider>
//         <DropDownMenu
//           value={selection}
//           onChange={handleChange}
//         >
//           <MenuItem value={1} primaryText="English" />
//           <MenuItem value={2} primaryText="Spanish" />
//           <MenuItem value={3} primaryText="French" />

//         </DropDownMenu>
//         <br /><br /><br />
//         <center>
//           {pageControl()}
//         </center>
//       </MuiThemeProvider>
//     </div>
//   );
// }

// export default Dropdown;