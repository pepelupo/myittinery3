import './App.css';
import Footer from './Footer/Footer';
import ResponsiveAppBar from './Navbar/Navbar';
import Main from './Main/Main';
import Carrusel from './Carousel/Carousel'
import Hero from  './Hero/Hero'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ResponsiveAppBar/>
          {/* <Routes> */}
            {/* <Route path=''></Route> */}
          {/* <Main/> */}
          <Hero/>
          <Carrusel/>
          <Footer/>
          {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
