import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
    return (<>
        <div className='my-2 col'>
            <h1 className='text-center my_serve'>Our Services</h1>
        </div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                 <div className="row gy-4">
                  {Sdata.map((val,ind)=>{
                   return (<Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    key={ind}
                   />) 
                  })}
                 </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Service