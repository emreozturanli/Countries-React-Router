import {FaGlobeEurope,FaGlobeAsia,FaGlobeAfrica,FaGlobeAmericas} from 'react-icons/fa'
import {GiAntarctica, GiEarthAsiaOceania} from 'react-icons/gi'

export const regions = [
    {
        name:'Europe',
        image: <FaGlobeEurope className='region-icons'/>
    },
    {   
        name:'Oceania',
        image: <GiEarthAsiaOceania  className='region-icons'/>
    }, 
    {
        name:'Asia',
        image: <FaGlobeAsia  className='region-icons'/>
    }, 
    {
        name:'Antarctic',
        image: <GiAntarctica  className='region-icons'/>
    }, 
    {
        name:'Africa',
        image: <FaGlobeAfrica  className='region-icons'/>
    }, 
    {
        name:'Americas',
        image: <FaGlobeAmericas  className='region-icons'/>
    }
]