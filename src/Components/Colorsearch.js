import React from 'react';
import Tab from '@mui/material/Tab';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



  
function Color(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://localhost:7065/api/Paint').then(
            response => response.json()
        ).then(json => {
            setData(json)
        })
      

    }, [])
// data.map(user => console.log(user))

  
// const [auto,setAuto]=React.useState([])
const [Value, setValue] = React.useState('1');
const { children, value, index, ...other } = props;


    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };


    const handleSearch = () => {
        const filteredResults = data.filter(f => f.paintColor.toLowerCase().includes(searchQuery.toLowerCase()));
        setData(filteredResults);
    
       

    };
    const auto  = data.map((ele)=>{if(ele.type ="AUTO"){
        return <h1>{ele.id}</h1>
    
    }})
console.log(auto,"auto++++");
    const reference  = data.map((ele)=>{if(ele.type ="REFERENCE"){
        return  <h1>{ele.id}</h1> 
    }})
   
    

    const [info, setInfo] = useState('');
    const handleClearclick = () => {
        setInfo('');
    };


    return (

        <Box>
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


            <Divider variant="middle" color="green" />
            <Box sx={{ m: 3, width: 1600, maxWidth: '100%' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Color Search
                </Typography>

                <Box sx={{ flexGrow: 1, pl: 90 }}>

                    <Grid container spacing={7}>

                        <Grid item xs={5}>
                            <TextField
                                variant="outlined"
                                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end"  >

                                            <IconButton onClick={handleSearch} sx={{ "&:hover": { backgroundColor: "blue" } }} >
                                                <Search />
                                                
                                            </IconButton>

                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}>
                            </input>
                            <button  onClick={handleSearch}>Search</button> */}
                        </Grid>
                        <Grid item xs={3}>

                            <Stack direction="row" spacing={1} >
                                <Button variant="outlined" startIcon={<AddAPhotoIcon />}  >
                                    Import Panel
                                </Button>
                            </Stack>
                        </Grid>

                    </Grid>

                </Box>

            </Box>

            <Box sx={{ pl: 90 }}>
                <Grid container spacing={2}>

                    <TabContext >
                    
                    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
               
                 
                    <Box sx={{ pl: 90 }}>
                        <Button variant="outlined" onClick={handleClearclick}>
                            Clear Search
                        </Button>
                        <p> {info} </p>
                    </Box>
                    </TabContext>
                </Grid>
            </Box>
           
            <Box marginTop={3} color="black">
                <Stack direction="row" spacing={2} pl="160ch">
                    <Button variant="outlined" >
                        Show All Formulas
                    </Button>
                </Stack>
            </Box>
        </Box>
    )

};



export default Color;