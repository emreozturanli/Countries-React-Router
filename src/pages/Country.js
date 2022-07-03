import {Link,useParams} from 'react-router-dom';
import {GiGlobe} from 'react-icons/gi'
import {FaCity, FaAmericanSignLanguageInterpreting,FaMoneyBillAlt} from 'react-icons/fa'
import { Error } from './Error';

export const Country = ({countries}) => {
    const {countryName} = useParams();

    const country = countries.find((country) => country.name.common.toLowerCase() === countryName);
    
    if(!country){
        return <Error/>
    }
    
    const  {name:{common}, capital,flags,region, languages, currencies } = country ;
  return (

    <>
    <article>
        <header>
            <h1>{common}</h1>
        </header>
        <section className='info-container'>
            <div className="flag-img">
                <img src={flags.png} alt={common}/>
            </div>
            <div>
                <GiGlobe className='country-icon'/>
                <h3>{region ? region : 'N/A'}</h3>
            </div>
            <div>
               <FaCity className='country-icon'/> 
               <p>{capital ? capital : 'N/A' }</p>
            </div>
            <div>
                <FaAmericanSignLanguageInterpreting className='country-icon'/>
                <p>{languages ? Object.values(languages) : 'N/A'}</p>
            </div>
            <div>
                <FaMoneyBillAlt className='country-icon'/>
                <p> {currencies ? Object.values(currencies)[0].name : 'N/A'} {currencies ? Object.values(currencies)[0].symbol : 'N/A'}</p>
            </div>
        </section>
        <Link to={`/${region.toLowerCase()}`} style={{color: '#72FD79'}}> Back to {region}</Link>
    </article> 

</> )
}
