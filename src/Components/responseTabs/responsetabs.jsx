import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {connect } from 'react-redux'
import {useState, useEffect} from 'react'

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

const ResponseTabs = (props) => {
    const [value, setValue] = React.useState(0);
    const [body_data, setBodyData] = React.useState()
    const [res_data, setResData] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setResData(props.data)
    })

    
  const PrettyPrintJson = ({ data }) => (
    <div className='p-3 pl-4'>
      <pre className='json_formate_data' >
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  );

    const handleBodyData = (e) => {
        const data = e.target.value
        // console.log("Data", data);
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
                    }} label="Body" {...a11yProps(0)} />
                    <Tab sx={{
                        fontSize: '10px',
                        padding: '0px',
                        textTransform: 'capitalize',
                        minWidth: '0px',
                        margin: '0 8px'
                    }} label="Cookies" {...a11yProps(1)} />
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
                    }} label="Test Results" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel sx={{ padding: '0px', width: '100%' }} value={value} index={0}>
                <div className='body_box_lower_2 pl-2'>
                    <div className='body_box_lower_2 w-100 mt-2 d-flex justify-content-between'>

                        <div className='body_box_lower_2_tabs d-flex'>
                            <p className='body_box_lower_2_tabs_item p-0 m-0 px-3 rounded-left'>
                                <span>Pretty</span>
                            </p>
                            <p className='body_box_lower_2_tabs_item p-0 m-0 px-3'>
                                <span>Raw</span>
                            </p>
                            <p className='body_box_lower_2_tabs_item p-0 m-0 px-3'>
                                <span>Preview</span>
                            </p>
                            <p className='body_box_lower_2_tabs_item p-0 m-0 px-3 rounded-right'>
                                <span>Visualize</span>
                            </p>

                            <p className='body_box_lower_2_tabs_item_text rounded-right rounded-left'>
                                <span className='mr-2'>Text</span>
                                <span>
                                    <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
                                </span>
                            </p>
                            <p className='body_box_lower_2_tabs_item rounded-right rounded-left'>
                                <span>
                                    <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3H1V2H15V3Z" fill="#d3480e"></path><path d="M12 8H1V7H12C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13H9.70712L11.3536 14.6464L10.6465 15.3536L7.79291 12.5L10.6465 9.64645L11.3536 10.3536L9.70712 12H12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d3480e"></path><path d="M1 13H6V12H1V13Z" fill="#d3480e"></path></svg></i>
                                </span>
                            </p>
                        </div>

                        <div className='body_box_lower_2_response d-flex justify-content-between align-items-center'>
                            <div className='mx-2'>
                                <p>
                                    <span>
                                        <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5C2 9.77614 2.22386 10 2.5 10H3V11H2.5C1.67157 11 1 10.3284 1 9.5V2.5C1 1.67157 1.67157 1 2.5 1H9.5C10.3284 1 11 1.67157 11 2.5V3H10V2.5C10 2.22386 9.77614 2 9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 5C5.67157 5 5 5.67157 5 6.5V13.5C5 14.3284 5.67157 15 6.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.5C15 5.67157 14.3284 5 13.5 5H6.5ZM6 6.5C6 6.22386 6.22386 6 6.5 6H13.5C13.7761 6 14 6.22386 14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5V6.5Z" fill="#6B6B6B"></path></svg></i>
                                    </span>
                                </p>
                            </div>
                            <div className='mx-3'>
                                <p>
                                    <span>
                                        <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.87147 9.16437C10.5768 8.30243 11 7.20063 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.20063 11 8.30243 10.5768 9.16437 9.87147L9.89648 10.6036L9.64648 10.8536L13.5758 14.7829C13.8101 15.0172 14.19 15.0172 14.4243 14.7829L14.7829 14.4243C15.0172 14.19 15.0172 13.8101 14.7829 13.5758L10.8536 9.64648L10.6036 9.89648L9.87147 9.16437ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" fill="#6B6B6B"></path></svg></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="response-viewer">
                    <PrettyPrintJson className='json_formate_data' data={res_data} />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ResponseTabs);