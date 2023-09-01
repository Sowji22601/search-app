import React, { useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Example = () => {
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
  const handleSearch = (e,newValue) => {
    // const searchTerm = newValue.toString();
    console.log(searchTerm,"serachterm+++");
    // searchTerm=searchTerm.toLowerCase();

    const filteredResults = data.filter((item) =>
      item.paintColor.toLowerCase().includes(newValue.toLowerCase())
    );
    setSearchTerm(searchTerm);
    setSearchResults(filteredResults);
  
  };
const auto = searchResults.map((ele)=> {if (ele.type == "AUTO") {
  return <h1>{ele.id}{ele.paintColor}</h1>
  
}}) 
  
const real = searchResults.map((ele)=> {if (ele.type == "REFERENCE") {
  return <h1>{ele.paintColor}</h1>
  
}}) 
const Commercial = searchResults.map((ele)=> {if (ele.type == "COMMERCIAL") {
  return <h1>{ele.paintColor}</h1>
  
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
          <Autocomplete
      disablePortal
      freeSolo
      id="combo-box-demo"
      options={data.map((option) => option.paintColor)}
      value={searchTerm}
      sx={{ width: 300 }}
      onInputChange={handleSearch}
      renderInput={(params) => <TextField {...params} label="search" />}
    />
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}

      /> */}
      {/* <ul>
    
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    
      </ul> */}
<div>
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="AUTO" {...a11yProps(0)} />
          <Tab label="cOMMERCIAL" {...a11yProps(1)} />
          <Tab label="REFERENCE" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
{auto}

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
  {Commercial}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
     {real}
      </CustomTabPanel>
    </Box>
</div>
    </div>
  
  );
};

export default Example;