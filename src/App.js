import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from './pages/Home';
import { MainLayout } from './MainLayout';
import { Region } from "./pages/Region";
import { Country } from "./pages/Country";
import { Error } from "./pages/Error";
import axios from "axios";
import { useEffect, useState } from "react";

const url='https://restcountries.com/v3.1/all';

function App() {
    const [countries, setCountries] = useState([]);

    const fetchUrl = async () => {
      try {
        const res = await axios.get(url);
        setCountries(res.data);
      } catch (error) {
        alert('An error occured.Please try again.')
      }
        
    }
    useEffect(()=>{
        fetchUrl();
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/:regionName" element={<Region countries={countries}/>}/>
          <Route path="/:regionName/:countryName" element={<Country countries={countries}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
