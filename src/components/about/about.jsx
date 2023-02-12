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
    <div className='ieeetext'><strong><p style={{fontSize:"25px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>Institute of Electrical and Electronics Engineers(IEEE)</p></strong> An association dedicated to advancing innovation and technological excellence for the benefit of humanity.</div>
    <img className="ieee_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
  </div></div>
  <div className='container reveal faderight'>
  <div className='rsc'>
    <img className="rsc_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
    <div className='rsctext'><strong><p style={{fontSize:"25px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>RAJASTHAN SUB-SECTION CONGRESS (RSSC)</p></strong>A daylong event intended to attract inquisitive minds from across the state to interact, participate and discuss the evolving and changing technology.</div>
  </div></div>
  <div className='container reveal fadeLeft'>
  <div className='must'>
    <div className='musttext'><strong><p style={{fontSize:"23px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>IEEE Student Branch Mody University of Science and Technology</p></strong> Provides a platform & opportunities to connect, meet and learn from fellow IEEE students and engage with professional IEEE members locally.</div>
    <img className="must_im"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
  </div></div>
</div>
<div className='infomobile'>
<div className='container reveal fadeLeft'>
  <div className='ieee' id='one'>
  <img className="aboutimg"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
    <div className='abttext'><strong><p style={{fontSize:"25px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>Institute of Electrical and Electronics Engineers(IEEE)</p></strong> An association dedicated to advancing innovation and technological excellence for the benefit of humanity.</div>
  </div></div>
  <div className='container reveal faderight'>
  <div className='rsc' id='two'>
    <img className="aboutimg"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
    <div className='abttext'><strong><p style={{fontSize:"25px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>RAJASTHAN SUB-SECTION CONGRESS (RSSC)</p></strong>A daylong event intended to attract inquisitive minds from across the state to interact, participate and discuss the evolving and changing technology.</div>
  </div></div>
  <div className='container reveal fadeLeft'>
  <div className='must' id='three'>
  <img className="aboutimg"  style={{height:"130px"}}src={require('./ieee2.png')} alt="alternate" />
    <div className='abttext'><strong><p style={{fontSize:"23px" , textTransform:"uppercase", color:"rgb(204,214,246)" }}>IEEE Student Branch Mody University of Science and Technology</p></strong> Provides a platform & opportunities to connect, meet and learn from fellow IEEE students and engage with professional IEEE members locally.</div>
  </div></div>
</div>
<ul className="circles_about">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
  )
}

export default about
