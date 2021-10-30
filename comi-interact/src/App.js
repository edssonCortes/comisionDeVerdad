
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import Titulos from './components/Titulos/Titulos.js';
import Landing from './imgs/Landing.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <img className="o_imgLanding" src={Landing} alt="Landing" />
      <Titulos texto="¿Quienes somos?"></Titulos>
     



      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
