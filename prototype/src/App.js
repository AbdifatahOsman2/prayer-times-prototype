import { useState } from 'react';
import { Box, TextField } from '@material-ui/core';
import axios from 'axios';
import './App.css';

function App() {

  const [hijri, setHijri] = useState()
  const [fajr, setFajr] = useState()
  const [Dhuhr, setDhuhr] = useState()
  const [Asr, setAsr] = useState()
  const [Maghrib, setMaghrib] = useState()
  const [Isha, setIsha] = useState()
  const [input, setInput] = useState()


  const instance = axios.create({
    baseURL: `https://api.pray.zone/v2/times/today.json?city=${input}&timeformat=1`
  })

  instance.defaults.withCredentials = false;
  
  const getSalah = async () => {
      try {
      const response = await instance.get();
      const prayers = response.data.results.datetime[0].times
      const hijri = response.data.results.datetime[0].date.hijri
      console.log(response)
      setHijri(hijri)
      setFajr(prayers.Fajr)
      setAsr(prayers.Asr)
      setDhuhr(prayers.Dhuhr)
      setMaghrib(prayers.Maghrib)
      setIsha(prayers.Isha)
      } catch (error) {
          console.error(error)
      }
  }
  getSalah()
  return (
    <div className="App">
    <>
    <Box>
    <form>


    </form>
    <div className='Prayer'>

    <h5>Salah Times </h5>
    <TextField color="primary" autoFocus={true} id="input" size='large' variant='outlined' style={{marginLeft:"620px", height:"100px"}} label='Search City' onChange = {(e) => setInput(e.target.value)}/>
      <div id="prayers-container">
      <span><li id="first" >Fajr <br/> {fajr}</li></span>
      <span><li id="first" >Dhuhr <br/> {Dhuhr}</li></span>
      <span><li id="first" >Asr <br/> {Asr}</li></span>
      <span><li id="first" >Maghrib <br/> {Maghrib}</li></span>
      <span><li id="first" >Isha <br/> {Isha}</li></span>
      </div>
    </div>
    </Box>
    </>
    </div>
  );
}

export default App;
