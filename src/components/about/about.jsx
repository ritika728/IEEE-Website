import React from 'react'
import './about.css'
import './about.js'
const about = () => {
  return (
    <div id="ABOUT">
    <div>
  <h1 className="first">ABOUT</h1>
  <div className='about-border'></div>
</div>

<div className='info'>
<div className='container reveal fadeLeft'>
  <div className='ieee'>
    <div className='ieeetext'><p>Institute of Electrical and Electronics Engineers(IEEE) is an association dedicated to advancing innovation and technological excellence for the benefit of humanity.</p></div>
    <img className="ieee_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
  </div></div>
  <div className='container reveal faderight'>
  <div className='rsc'>
    <img className="rsc_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
    <div className='rsctext'><p>A daylong event intended to attract inquisitive minds from across the state to interact, participate and discuss the evolving and changing technology.</p></div>
  </div></div>
  <div className='container reveal fadeLeft'>
  <div className='must'>
    <div className='musttext'><p>IEEE Student Branch, Mody University of Science and Technology provides opportunities to connect, meet and learn from fellow IEEE students and engage with professional IEEE members locally. </p></div>
    <img className="must_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
  </div></div>
</div>
    </div>
  )
}

export default about
