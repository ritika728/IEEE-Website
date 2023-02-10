import { Routes, Route } from 'react-router-dom';
import Landing from './components/page/landing.jsx'
import ScrollToTop from 'react-scroll-to-top';
import Nav from '../src/components/navbar/navbar.jsx'
import About from '../src/components/about/about.jsx'

function App() {
  return (
    <div>
         <ScrollToTop />
         {/* <Routes>
         <Route path="/" element={<Landing/>}></Route>
         </Routes> */}
         <Landing/>
         {/* <Nav/>
         <About/> */}
    </div>

  );
}

export default App;