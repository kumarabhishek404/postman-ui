// import react from 'react';

// const BodyParams = () => {

//     return (
//         <>

//             <div className='body_box_mid_2 w-100 d-flex justify-content-between mb-3'>

//                 <div className='body_box_mid_2_tabs d-flex'>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span className='text_params'>Params</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Authorization</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Headers</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Body</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Pre-request Script</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Tests</span>
//                     </p>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Settings</span>
//                     </p>
//                 </div>

//                 <div className='body_box_mid_2_cokkie'>
//                     <p className='body_box_mid_2_tabs_item'>
//                         <span>Cookies</span>
//                     </p>
//                 </div>

//             </div>

//             <div className='body_box_mid_3 d-flex justify-content-between'>
//                 <div className=''>
//                     <p className='p-0 mb-2'>Query Params</p>
//                 </div>
//                 <div></div>
//             </div>
// <div className='body_box_mid_4'>
//     <table className='body_box_mid_4_table w-100'>
//         <tr>
//             <th></th>
//             <th className='body_box_mid_4_table_head'>KEY</th>
//             <th className='body_box_mid_4_table_head'>VALUE</th>
//             <th className='body_box_mid_4_table_head '>
//                 <p className='m-0 p-0 w-100'>
//                     DESCRIPTION
//                 </p>
//                 {/* <div className='d-flex'>
//           <span>
//           <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF key-value-column-toggle--button" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
//           </span>
//           <p className='p-0 m-0'>Bulk Edit</p>
//         </div> */}
//             </th>
//         </tr>
//         <tr className='border border-right-light'>
//             <td className='border border-left-0 border border-right-0'>  </td>
//             <td>Key</td>
//             <td>Value</td>
//             <td className=''>Description</td>
//         </tr>
//         <tr>
//         </tr>
//     </table>
// </div>
//         </>

//     )
// }

// export default BodyParams;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [body_data, setBodyData] = React.useState()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleBodyData = (e) => {
        const data = e.target.value
        console.log("Data", data);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{}}>
                <Tabs sx={{}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 5px 0 10px',
                    }} label="Params" {...a11yProps(0)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Authorization" {...a11yProps(1)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Headers" {...a11yProps(2)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Body" {...a11yProps(4)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Headers" {...a11yProps(5)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Pre-request Script" {...a11yProps(6)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Tests" {...a11yProps(7)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Settings" {...a11yProps(8)} />
                </Tabs>
            </Box>
            <TabPanel sx={{padding: '0px'}} value={value} index={0}>
                <div className='body_box_mid_3 d-flex justify-content-between'>
                    <div className=''>
                        <p className='p-0 mb-2'>Query Params</p>
                    </div>
                    <div></div>
                </div>
                <div className='body_box_mid_4'>
                    <table className='body_box_mid_4_table w-100'>
                        <tr>
                            <th></th>
                            <th className='body_box_mid_4_table_head'>KEY</th>
                            <th className='body_box_mid_4_table_head'>VALUE</th>
                            <th className='body_box_mid_4_table_head '>
                                <p className='m-0 p-0 w-100'>
                                    DESCRIPTION
                                </p>
                                {/* <div className='d-flex'>
                      <span>
                      <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF key-value-column-toggle--button" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
                      </span>
                      <p className='p-0 m-0'>Bulk Edit</p>
                    </div> */}
                            </th>
                        </tr>
                        <tr className='border border-right-light'>
                            <td className='border border-left-0 border border-right-0'>  </td>
                            <td>Key</td>
                            <td>Value</td>
                            <td className=''>Description</td>
                        </tr>
                        <tr>
                        </tr>
                    </table>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className='body_box_mid_3 d-flex justify-content-between'>
                    <div className=''>
                        <p className='p-0 mb-2'>Headers</p>
                    </div>
                    <div></div>
                </div>
                <div className='body_box_mid_4'>
                    <table className='body_box_mid_4_table w-100'>
                        <tr>
                            <th></th>
                            <th className='body_box_mid_4_table_head'>KEY</th>
                            <th className='body_box_mid_4_table_head'>VALUE</th>
                            <th className='body_box_mid_4_table_head '>
                                <p className='m-0 p-0 w-100'>
                                    DESCRIPTION
                                </p>
                                {/* <div className='d-flex'>
                      <span>
                      <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF key-value-column-toggle--button" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
                      </span>
                      <p className='p-0 m-0'>Bulk Edit</p>
                    </div> */}
                            </th>
                        </tr>
                        <tr className='border border-right-light'>
                            <td className='border border-left-0 border border-right-0'>  </td>
                            <td>Key</td>
                            <td>Value</td>
                            <td className=''>Description</td>
                        </tr>
                        <tr>
                        </tr>
                    </table>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='border p-2'>
                    <textarea className='w-100 api_body_input' onChange={handleBodyData} value={body_data} rows={10} />
                </div>
            </TabPanel>
            <style jsx>
                {`
                .css-19kzrtu {
                    padding: 10px 0;
                }
                `}
            </style>
        </Box>
    );
}
