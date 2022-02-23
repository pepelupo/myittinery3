import './App.css';
import Footer from './Footer/Footer';
import ResponsiveAppBar from './Navbar/Navbar';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
          <ResponsiveAppBar/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default App;
