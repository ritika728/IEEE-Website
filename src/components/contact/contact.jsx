import React from 'react'
import './contact.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from '@material-ui/core';

const contact = () => {
  return (
    <div id='CONTACT'>
        <div className='footer'>
        <div className='contact_main'>
        <div class="footer-ieee">
                <div>
                    <a style={{textDecoration:"none"}} href='#'><p className="footer-text">IEEE SB MODY UNIVERSITY OF SCIENCE AND TECHNOLOGY</p></a>
                </div>
                <div style={{marginBottom:"40px"}} class="footer-social-icon">
                    <span>Follow us</span>
                    <Link href="mailto:ritikamalik100102@gmail.com?" className="icons"target="_blank"><EmailIcon/></Link>
                    <Link href="https://twitter.com/Ritika287" className="icons" target="_blank"><LinkedInIcon/></Link>
                    <Link href="https://github.com/ritika728" className="icons" target="_blank"><TwitterIcon/></Link>
                    <Link href="https://www.linkedin.com/in/ritika-malik-must/" target="_blank" className="icons"><FacebookIcon/></Link>
                </div>            
            </div>
            <div class="footer-ieee">
                <div>
                    <a style={{textDecoration:"none"}} href='#'><p className="footer-text">IEEE DELHI STUDENT SECTION NETWORK</p></a>
                </div>
                <div style={{marginBottom:"20px"}} class="footer-social-icon">
                    <span>Follow us</span>
                    <Link href="mailto:ritikamalik100102@gmail.com?"style={{marginLeft:"0px"}}className="icons" target="_blank"><EmailIcon/></Link>
                    <Link href="https://twitter.com/Ritika287" className="icons" target="_blank"><LinkedInIcon/></Link>
                    <Link href="https://github.com/ritika728" className="icons" target="_blank"><TwitterIcon/></Link>
                    <Link href="https://www.linkedin.com/in/ritika-malik-must/" target="_blank" className="icons"><FacebookIcon/></Link>
                </div>            
            </div>
                
        </div>
        <div class="footer-widget-heading">
            <h3>Useful Links</h3>
         
            <ul>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">HOME</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">ABOUT</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">EVENTS</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href='#'>TEAM</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href='#'>SPONSORS</a></li>
                {/* <li><a className='links_nav' style={{textDecoration:"none"}} href="#">CONTACT</a></li> */}
            </ul>
            </div>
            <div class="footer-widget-heading">
            <h3>Contact</h3>
         
            <ul>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">Heena Thadani</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">Jahnavi Sharma</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href="#">Anshul Yadav</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href='#'>Kailash Maurya</a></li>
                <li><a className='links_nav' style={{textDecoration:"none"}} href='#'>Vaidehi Purohit</a></li>
            </ul>
            
            </div>
            <div className='contactandlinks'>
            <div class="footer-widget-heading">
            <h3 id='usefullinks'>Useful Links</h3>
         
            <ul>
                <li><a style={{textDecoration:"none"}} href="#">HOME</a></li>
                <li><a style={{textDecoration:"none"}} href="#">ABOUT</a></li>
                <li><a style={{textDecoration:"none"}} href="#">EVENTS</a></li>
                <li><a style={{textDecoration:"none"}} href='#'>TEAM</a></li>
                <li><a style={{textDecoration:"none"}} href='#'>SPONSORS</a></li>
                <li><a style={{textDecoration:"none"}} href="#">CONTACT</a></li>
            </ul>
            </div>
            <div class="footer-widget-heading2">
            <h3 id='contactlinks'>Contact</h3>
         
            <ul>
                <li><a style={{textDecoration:"none"}} href="#">Heena Thadani</a></li>
                <li><a style={{textDecoration:"none"}} href="#">Jahnavi Sharma</a></li>
                <li><a style={{textDecoration:"none"}} href="#">Anshul Yadav</a></li>
                <li><a style={{textDecoration:"none"}} href='#'>Kailash Maurya</a></li>
                <li><a style={{textDecoration:"none"}} href='#'>Vaidehi Purohit</a></li>
                <li><a style={{textDecoration:"none"}} href="#">Nivedita Vyas</a></li>
                <li><a style={{textDecoration:"none"}} href="#">Ritika Malik</a></li>
                <li><a style={{textDecoration:"none"}} href="#">Shobhna Sharma</a></li>
            </ul>
            </div>
            </div>
            <div className="footer-widget">
                            <div class="footer-widget-heading3">
                                <h3>Become a member</h3>
                           </div>
                            <div style={{marginBottom:"10px"}} className="footer-textt">
                                <p>REGISTER HERE TO JOIN IEEE</p>
                            </div>
                            <div style={{marginBottom:"10px"}} class="footer-textt">
                                <p>REGISTER HERE FOR RSSC</p>
                            </div>
                            <div style={{marginBottom:"10px"}} class="footer-textt">
                                <p>CODE OF CONDUCT</p>
                            </div>
                            <div class="queries">
                                <h3>Any queries, let us know : </h3>
                           </div>
                           <div>
                            {/* <form className='msg_btn' action="#">
                                <input className='email' type="text" placeholder="Email Address"></input>
                                <button><i><TelegramIcon/></i></button>
                            </form> */}
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"></input>
                                    <button><i><TelegramIcon/></i></button>
                                </form>
                            </div>
                        </div>         
        </div>
        <div className='copyright-border'></div>
        <div className='copyright'>
            <p>Copyright © 2023 IEEE SB MUST All Right Reserved</p>
        </div>
    </div>
  )
}

export default contact
