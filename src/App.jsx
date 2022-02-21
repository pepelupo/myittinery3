import './App.css';
import Hero from './Hero'
import Carousel from './Carousel';
import Footer from './Footer';
import ResponsiveAppBar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
        <Hero/>
        <Carousel/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
