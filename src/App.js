import NAVBAR from './components/navbar/navbar.jsx'
import ABOUT from './components/about/about.jsx'

function App() {
  return (
    <div className="App">
      {<NAVBAR/>}
      
      {<ABOUT/>}
    </div>
  );
}

export default App;
