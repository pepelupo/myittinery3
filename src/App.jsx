import './App.css';
import Navbar from './Navbar'
import Hero from './Hero'
import Carousel from './Carousel';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Carousel/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
