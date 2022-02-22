import './App.css';
import Hero from './Hero/Hero'
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import ResponsiveAppBar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
        {/* Agregamos un contenedor para poder ordenar los componentes por fuera del navbar */}
        <div className="container">
          <Hero/>
          <Carousel/>
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
