import { regions } from "../data";
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
    <main className='container'>
        {
            regions.map((region,index)=>{
                return <Link key={index} style={{textDecoration: 'none'}} to={`/${region.name.toLowerCase()}`}>
                            <div className="card">
                            <h2 className="card-title">{region.name}</h2>
                            {region.image}
                        </div>
                    </Link>
                
            })
        }
    </main>
    )
}
