import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (<>
    <footer className='bg-light text-center marg'>
        <p>© {year} Technical Allright reserved | Term and Condition</p>
    </footer>
  </>
  )
}

export default Footer