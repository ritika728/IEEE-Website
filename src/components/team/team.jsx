import React from 'react'
import Heena from '../assests/heena.png'
import Jahanvi from '../assests/jahnavi.png'
import Nivedita from '../assests/nivedita.jpeg'
import Ritika from '../assests/ritika.jpeg'
import Vaidehi from '../assests/vaidehi.jpg'
import EmailIcon from '@mui/icons-material/Email';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import { width } from '@mui/system';
import './team.css'
const team = () => {
  return (
    <div id='TEAM'>
		<h1 className="team_head">MEET OUR TEAM</h1>
		<div className='teams-border'></div>
		<div className='container2 reveal fadein'>
      <section class="section-team">
		<div class="container_team">
			<div class="row">
				
					<div class="single-person">
						<div class="person-image">
							<img src={Heena} alt="Heena Thadani" ></img>
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Heena Thadani</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Chairperson, IEEE SB MUST</span>
						
					</div>
				</div>
				
					<div class="single-person">
						<div class="person-image">
							<img src={Jahanvi} alt="Jahnavi Sharma"></img>
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Jahnavi Sharma</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Vice-Chairperson ,IEEE SB MUST</span>
						
					</div>
				</div>
				
					<div class="single-person">
						<div class="person-image">
							<img src={Nivedita} alt="Nivedita Vyas"></img>
							{/* <span class="icon">
								<i class="fab fa-angular"></i>
							</span> */}
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Ritika Malik</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Secretary, IEEE SB MUST</span>
						</div>
					</div>

					<div class="single-person">
						<div class="person-image">
							<img src={Ritika} alt="Nivedita Vyas"></img>
						</div>
						<div class="person-info">
							<div className='contactt'>
							<h3 class="full-name">Ritika Malik</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Webmaster, IEEE SB MUST</span>
						</div>
					</div>
			</div>
			<div class="row" style={{marginTop:"-70px"}}>

					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""></img>
							{/* <span class="icon">
								<i class="fab fa-wordpress-simple"></i>
							</span> */}
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Anshul Yadav</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Delhi Student Section Representative</span>
						
					</div>
				</div>
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt=""></img>
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Kailash Maurya</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Delhi Student Section Representative</span>
					</div>
				</div>
				<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt=""></img>
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Divyansh Sharma</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Chandigarh Sub Section Representative</span>
					</div>
				</div>
				            
				<div class="single-person">
						<div class="person-image">
							<img src={Vaidehi} alt="Vaidehi Purohit"></img>
						</div>
						<div class="person-info">
						<div className='contactt'>
							<h3 class="full-name">Vaidehi Purohit</h3>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="iconss" target="_blank"><EmailIcon/></Link>
							<Link href="" ><LinkedinIcon/></Link>
							</div>
							<span class="speciality">Rajasthan Sub-Section Representative</span>
						</div>
					
				</div>
			</div>
		</div>
	</section>
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

export default team
