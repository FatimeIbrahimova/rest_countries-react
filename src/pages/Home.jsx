import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MyCard from '../components/MyCard'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const Home = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("")
    function handleChange(e) {
        setValue(e.target.value)
        console.log(value);
    }
    const getData = async () => {
        return await axios.get('https://restcountries.com/v3.1/all')
            .then((resp) => setData(resp.data))

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: 2, marginBottom: 2 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase onChange={(e) => handleChange(e)}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            {/* <Grid container spacing={3} style={{ marginTop: "10px" }}> */}

            {data
                .filter(item => {
                    return value.trim().toLowerCase() === "" ? item : item.name.common.toLowerCase().includes(value.toLowerCase())
                })
                .map((item, index) => {
                    return <MyCard key={index} data={item} />
                })}

            {/* </Grid> */}
        </div>
    )
}

export default Home