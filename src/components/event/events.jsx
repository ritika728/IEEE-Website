import React from 'react'
import './events.css'
import '../navbar/navbar.css'

const events = () => {
  return (
    <div id="EVENTS">
      <h1 className='events_heading'>EVENTS</h1>
      <div className='about-border'></div>
      
       <div className='event_main'>
        <div className='events'>
        <div className='container2 reveal fadeLeft'>
      <article class="card">
  <div class="thumb"></div>
  <div class="infos">
    <div className='event_deets'>
    <h2 class="title">OPENING CEREMONY<span class="flag"></span></h2>
    <h3 class="date">10:00 AM  - 11:30 AM</h3>
    </div>
    {/* <h3 class="seats"></h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
<div className='container2 reveal fadein'>
<article class="card">
  <div class="thumb"></div>
  <div class="infos">
    {/* <h2 class="title">EVENT - 1<span class="flag"></span></h2>
    <h3 class="date">XY - XY</h3> */}
    {/* <h3 class="seats">seats remaining: 2</h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
<div className='container reveal faderight'>
<article class="card">
  <div class="thumb"></div>
  <div class="infos">
    {/* <h2 class="title">EVENT - 2<span class="flag"></span></h2>
    <h3 class="date">xy AM - yz AM</h3> */}
    {/* <h3 class="seats">seats remaining: 2</h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
    </div>
    <div className='events'>
    <div className='container2 reveal fadeLeft'>
      <article class="card" id='card2'>
  <div class="thumb"></div>
  <div class="infos">
    {/* <h2 class="title">EVENT - 3<span class="flag"></span></h2>
    <h3 class="date">xy PM - yz PM</h3> */}
    {/* <h3 class="seats">seats remaining: 2</h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
<div className='container2 reveal fadein'>
<article class="card">
  <div class="thumb"></div>
  <div class="infos">
    {/* <h2 class="title">ABCDEFGH<span class="flag"></span></h2>
    <h3 class="date">xy AM - yz AM</h3>
    <h3 class="seats">seats remaining: 2</h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
<div className='container2 reveal faderight'>
<article class="card">
  <div class="thumb"></div>
  <div class="infos">
    {/* <h2 class="title">ABCDEFGH<span class="flag"></span></h2>
    <h3 class="date">XY AM - YZ AM</h3> */}
    {/* <h3 class="seats">seats remaining: 2</h3> */}
    <p class="txt">
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 class="details">event details</h3>
  </div>
</article>
</div>
    </div>
    </div>
    <ul className="circle_events">
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

export default events
