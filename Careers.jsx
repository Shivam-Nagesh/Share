import React from 'react'
import { useLoaderData , Link } from 'react-router-dom'


export const careersLoader = async ()=>{
    const response = await fetch('http://localhost:4000/careers');
    return (await response.json());
}

export const Careers = () => {

    const careers = useLoaderData(); 

  return (
    <>
    <div>Careers</div>
    {
        careers.map( (career) => (
            <Link to='/about' key={career.id}>
                <h3>{career.title}</h3>
                <p>Location: {career.location}</p>
            </Link>
        ))
    }
    </>
  )
}
