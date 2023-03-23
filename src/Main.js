import React from 'react'

const country = "Nigeria";


function Main() {
  return (
    <main>
<section className='section'>
       <h2 className='title'>About Us</h2>
       <p className='paragraph'>
         We are a small team of web developers based in {country}. We
         specialise in creating modern and responsive websites for businesses
         and individuals.
       </p>
     </section>
     <section className='section second'>
       <h2 className='title'>Our Services</h2>
       <ul className='list'>
         <li>Web Design</li>
         <li>Web Development</li>
         <li>E-commerce Solutions</li>
         <li>Search Engine Optimization (SEO)</li>
       </ul>
     </section>

    </main>
  )
}

export default Main