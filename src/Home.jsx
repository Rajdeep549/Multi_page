import React from 'react'
import Common from './Common'
import web from './Images/web.jpg'
const Home = () => {
    return (<>
        <Common
            
        name='Grow your Bussiness with'
        imgsrc={web}
        visit='/service'
        btnname='get Started'
        />
    </>
    )
}

export default Home