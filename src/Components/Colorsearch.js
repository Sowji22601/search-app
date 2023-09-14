import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

const Color = () => {
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

    const handleClick = (event, newValue) => {
        console.log(searchTerm, "searchterm+++");
    }
    const handleSearch = (e, newValue) => {
        // const searchTerm = newValue.toString();
        console.log(searchTerm, "searchterm+++");
        // searchTerm=searchTerm.toLowerCase();

        const filteredResults = data.filter((item) =>
            item.paintColor.toLowerCase().includes(newValue.toLowerCase())
        );
        setSearchTerm(searchTerm);
        setSearchResults(filteredResults);


    };

    function refreshPage() {
        window.location.reload(false);
    }
    const auto = searchResults.map((ele) => {
        if (ele.type == "AUTO") {
            return <h1>{ele.id}  {ele.paintColor}  {ele.paintQuality}  {ele.paintColorId}</h1>
        }
    })

    const reference = searchResults.map((ele) => {
        if (ele.type == "REFERENCE") {
            return <h1>{ele.id}  {ele.paintColor}  {ele.paintQuality}  {ele.paintColorId}</h1>

        }
    })
    const Commercial = searchResults.map((ele) => {
        if (ele.type == "COMMERCIAL") {
            return <h1>{ele.id}  {ele.paintColor}  {ele.paintQuality}  {ele.paintColorId}</h1>
        }
    })
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

        <Box sx={{ m: 3, pl: 80 }}>

            <Typography variant="h5" gutterbottom>
                Color Search
            </Typography>
            <div>

                <div style={{ display: "flex" }}>
                    <Divider />
                    <Autocomplete
                        disablePortal
                        freeSolo
                        id="combo-box-demo"
                        options={data.map((option) => option.paintColor)}
                        value={searchTerm}
                        sx={{ width: 300 }}
                        onInputChange={handleSearch}
                        renderInput={(params) => <TextField color="success" {...params} label="search" />}
                    />


                    <IconButton type="button" value={searchTerm} class="test" onClick={handleClick} >
                        <SearchIcon />
                    </IconButton>

                </div>
                {/* </div>
                <Autocomplete
                    disablePortal
                    freeSolo
                    id="combo-box-demo"
                    options={data.map((option) => option.paintColor)}
                    value={searchTerm}
                    sx={{ width: 300 }}
                    onInputChange={handleSearch}
                    renderInput={(params) => <TextField {...params}  label="search" /> }                   
                />
                <div> */}

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="AUTO" {...a11yProps(0)} />
                                    <Tab label="cOMMERCIAL" {...a11yProps(1)} />
                                    <Tab label="REFERENCE" {...a11yProps(2)} />
                                </Tabs>
                            </Grid>

                            <Grid item xs={4}>
                                <Button variant="outlined" onClick={refreshPage}>Clear Search</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        {auto}
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        {Commercial}
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        {reference}
                    </CustomTabPanel>
                </Box>

            </div>

        </Box>
    );
};

export default Color;