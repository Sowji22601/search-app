
import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';



const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = React.useState(0);

const [data, setData] = useState([])
useEffect(() => {
    fetch('https://localhost:7065/api/Paint').then(
        response => response.json()
    ).then(json => {
        setData(json)
    })
  

}, [])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
        const filteredResults = data.filter(f => f.paintColor.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(filteredResults);
        console.log(data,"data++"); 
         console.log(filteredResults,"filteredResults++");
  };

const auto = data.map((ele)=> {if (ele.type == "AUTO") {
	return <h1>   {ele.id}  {ele.paintColor}   </h1>
    
	
}}) 
	console.log(auto,"auto++++")
const real = data.map((ele)=> {if (ele.type == "REFERENCE") {
	return <h1>{ele.id}  {ele.paintColor}</h1>
	
}}) 

function CustomTabPanel(props) {
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
  
  CustomTabPanel.propTypes = {
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
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
		
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
		
      </ul>
<div>
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="auto" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="real" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
{auto}
ghghjgjhg
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     hgfhgfhgfgh
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
     {real}
      </CustomTabPanel>
    </Box>
</div>
    </div>
	
  );
};

export default Search;

