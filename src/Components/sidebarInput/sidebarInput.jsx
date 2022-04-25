import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import { createSvgIcon } from '@mui/material/utils';
import { connect } from 'react-redux'
import Accordion from '../Accordion/accordion';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = (props) => {
  const [value, setValue] = React.useState(0);
  // const [historyList, setHistory] = React.useState([
  //     {
  //         method: "GET",
  //         link: "https://jsonplaceholder.typicode.com/posts/1/comments"
  //     }
  // ])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleHistoryClick = (index, historyItem) => {
    console.log("Index-- ", index, historyItem);
  }

  const Collections = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H5.04623C5.19041 2 5.32758 2.06224 5.42252 2.17075L8.62371 5.82925C8.71866 5.93776 8.85582 6 9 6H13.5C13.7761 6 14 6.22386 14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V2.5ZM14 5.08535V2.5C14 2.22386 13.7761 2 13.5 2H6.60188L9.22688 5H13.5C13.6753 5 13.8436 5.03008 14 5.08535Z" fill="#6B6B6B"></path></svg>,
    'Collections',
  );

  const APIs = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 1L11.0312 2.75V6.25L8.00008 8L4.96899 6.25V2.75L8.00008 1ZM5.96899 3.32735L8.00008 2.1547L10.0312 3.32735V5.67265L8.00008 6.8453L5.96899 5.67265V3.32735Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03117 9.75L4.00008 8L0.968994 9.75V13.25L4.00008 15L7.03117 13.25V9.75ZM4.00008 9.1547L1.96899 10.3274V12.6726L4.00008 13.8453L6.03117 12.6726V10.3274L4.00008 9.1547Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0312 9.75L12.0001 8L8.96899 9.75V13.25L12.0001 15L15.0312 13.25V9.75ZM12.0001 9.1547L9.96899 10.3274V12.6726L12.0001 13.8453L14.0312 12.6726V10.3274L12.0001 9.1547Z" fill="#6B6B6B"></path></svg>,
    'APIs',
  );

  const Environments = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V10H14V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H10V15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.5C5 6.22386 5.22386 6 5.5 6H10.5C10.7761 6 11 6.22386 11 6.5V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V6.5ZM6 7V9H10V7H6Z" fill="#6B6B6B"></path><path d="M15 12H12V15H15V12Z" fill="#6B6B6B"></path></svg>,
    'Environments',
  );

  const MockServers = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9C14 9.55228 13.5523 10 13 10C12.4477 10 12 9.55228 12 9C12 8.44772 12.4477 8 13 8C13.5523 8 14 8.44772 14 9Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.99993 2C2.82753 2 2.6673 2.08881 2.57593 2.235L0.0768851 6.23347C0.0281831 6.31062 0 6.40202 0 6.5V13.5C0 13.7761 0.223858 14 0.5 14H15.5C15.7761 14 16 13.7761 16 13.5V6.5C16 6.39874 15.9699 6.30452 15.9182 6.22578L13.4239 2.235C13.3326 2.08881 13.1723 2 12.9999 2H2.99993ZM14.5978 6L12.7228 3H3.27705L1.40205 6H14.5978ZM1 13V7H15V13H7V10H6V13H5V10H4V13H3V10H2V13H1Z" fill="#6B6B6B"></path></svg>,
    'MockServers',
  );

  const Monitors = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.21667 4.57051C6.14147 4.37499 5.95237 4.24708 5.74291 4.25005C5.53345 4.25302 5.34804 4.38625 5.27842 4.58383L4.07463 8H3V9H4.42857C4.64065 9 4.82966 8.8662 4.90015 8.66618L5.77052 6.1962L7.78333 11.4295C7.85362 11.6123 8.02414 11.7372 8.2196 11.7491C8.41506 11.761 8.59948 11.6577 8.69144 11.4848L10.506 8.07341L11.1327 9.21983C11.2204 9.38024 11.3886 9.48 11.5714 9.48H13V8.48H11.8679L10.9387 6.78017C10.8506 6.61887 10.681 6.51896 10.4971 6.52001C10.3133 6.52106 10.1449 6.6229 10.0586 6.78519L8.32324 10.0476L6.21667 4.57051Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H13.5C13.7761 2 14 2.22386 14 2.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V2.5Z" fill="#6B6B6B"></path></svg>,
    'Monitors',
  );

  const Flows = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.09921 5.75478H0.391057C0.175076 5.75478 0 5.92989 0 6.14583V10.6361C0 10.852 0.175076 11.0272 0.391057 11.0272H4.09921C4.31519 11.0272 4.49027 10.852 4.49027 10.6361V8.78203H7.70037V13.1457C7.70037 13.3617 7.87545 13.5368 8.09143 13.5368H11.5097V15.3909C11.5097 15.6068 11.6848 15.7819 11.9008 15.7819H15.6089C15.8249 15.7819 16 15.6068 16 15.3909V10.9007C16 10.6847 15.8249 10.5096 15.6089 10.5096H11.9008C11.6848 10.5096 11.5097 10.6847 11.5097 10.9007V12.7547H8.48249V4.2101H11.5097V5.88128C11.5097 6.09723 11.6848 6.27234 11.9008 6.27234H15.6089C15.8249 6.27234 16 6.09723 16 5.88128V1.39106C16 1.17512 15.8249 1 15.6089 1H11.9008C11.6848 1 11.5097 1.17512 11.5097 1.39106V3.42799H8.09143C7.87545 3.42799 7.70037 3.60311 7.70037 3.81905V7.99991H4.49027V6.14583C4.49027 5.92985 4.31519 5.75478 4.09921 5.75478ZM12.2918 11.2917H15.2179V14.9998H12.2918V11.2917ZM12.2918 1.78211H15.2179V5.49023H12.2918V1.78211ZM3.70815 10.245H0.782113V6.53689H3.70815V10.245Z" fill="#6B6B6B"></path></svg>,
    'Flows',
  );

  const History = createSvgIcon(
    <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2C5.68629 2 3 4.68629 3 8C3 8.09598 3.00225 8.19141 3.0067 8.28623L4.14648 7.14645L4.85359 7.85355L2.50004 10.2071L0.146484 7.85355L0.853591 7.14645L2.00628 8.29914C2.00211 8.19992 2 8.1002 2 8C2 4.13401 5.13401 1 9 1C12.866 1 16 4.13401 16 8C16 11.866 12.866 15 9 15C7.37595 15 5.87982 14.4463 4.69205 13.5178L5.30795 12.7299C6.32611 13.5259 7.60699 14 9 14C12.3137 14 15 11.3137 15 8C15 4.68629 12.3137 2 9 2Z" fill="#6B6B6B"></path><path d="M9 4H8V8.7831L10.7428 10.4287L11.2572 9.57125L9 8.2169V4Z" fill="#6B6B6B"></path></svg>,
    'History',
  );
  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100%', width: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '10px 20px',
          // margin: '10px 20px'
        }} icon={<Collections />} label="Collections" {...a11yProps(0)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',

        }} icon={<APIs />} label="APIs" {...a11yProps(1)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',
        }} icon={<Environments />} label="Environments" {...a11yProps(2)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',
        }} icon={<MockServers />} label="Mock Servers" {...a11yProps(3)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',
        }} icon={<Monitors />} label="Monitors" {...a11yProps(4)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',
        }} icon={<Flows />} label="Flows" {...a11yProps(5)} />
        <Tab sx={{
          fontSize: '7px',
          padding: '0px',
          textTransform: 'capitalize',
          minWidth: '0px',
          padding: '0 5px 0 10px',
        }} icon={<History />} label="History" {...a11yProps(6)} />
      </Tabs>
      <TabPanel style={{ width: '75%' }}
        value={value} index={0}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={1}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={2}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={3}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={4}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={5}>
        <div className='sidebar_container_2_container w-100'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: '75%' }} value={value} index={6}>
        <div className='sidebar_container_2_container'>
          <div className='d-flex ml-2'>
            <div class="input-icons">
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF input-search-group__search-glass-icon pm-icon pm-icon-normal pl-2" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1V3H15V2Z" fill="#6B6B6B"></path><path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#6B6B6B"></path><path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#6B6B6B"></path><path d="M9.75 13H6.25V14H9.75V13Z" fill="#6B6B6B"></path></svg></i>
              <input class="input-field sidebar_container_2_input" type="text" />
            </div>
            <p className='mx-2'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-action-button pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
          {
            props.historyList.map((historyItem, index) => {
              return <div>
                <div className='d-flex align-items-center'>
                  {/* <span className='mx-2'>
                    <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
                  </span> */}
                  <Accordion title={historyItem.time} items={historyItem.history} />
                  {/* <p className='sidebar_right_text p-0 m-0'>{historyItem.time}</p> */}
                </div>
                
              </div>
            })
          }
        </div>
      </TabPanel>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    historyList: state.historyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHistory: (res) => dispatch({ type: "SETHistoryList", payload: res })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalTabs)