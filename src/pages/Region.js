import {Link, useParams} from 'react-router-dom';
export const Region = ({countries}) => {
    const {regionName} = useParams();
  return (
    <section className='container'>
        {
            countries.map((country,index)=>{
                const {name:{common},flags,region} = country ;
                return region.toLowerCase() === regionName && 
                <Link key={index} style={{textDecoration: 'none'}} to={`/${region.toLowerCase()}/${common.toLowerCase()}`}>
                <div className="country-card" key={index}>
                    <h3 className='country-card-title'>{common}</h3>
                    <div className="flag-img">
                    <img src={flags.png} alt={common}/>
                    </div>
                </div> 
                </Link>
            }) 
        }
        
    </section>
  )
}
