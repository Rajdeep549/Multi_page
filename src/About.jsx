import React from 'react'
import Common from './Common'
import web1 from './Images/web1.jpg'

const About = () => {
  return (<>
    <Common
        name='Welcome to About Page'
        imgsrc={web1}
        visit='/contact'
        btnname='contact now'

    />
  </>
  )
}

export default About