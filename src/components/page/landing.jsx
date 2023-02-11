import './landing.css'
import DrawerAppBar from "../navbar/navbar.jsx";
import About from '../about/about.jsx'
import Events from '../event/events.jsx'
import { useState } from 'react';


function Landing() {
    const [navBg, setNavBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY>=75) {
            setNavBg(true);
        }
        else {
            setNavBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            {
                navBg === true ? (
                    <>
                        <div className='ch'>
                            <DrawerAppBar />
                        </div>
                    </>

                ) : (
                    <>
                        <DrawerAppBar />
                    </>
                )
            }
        <About/>
        <Events/>
        </>
    )
}
 export default Landing;