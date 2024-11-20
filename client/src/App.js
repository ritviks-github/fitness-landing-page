import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Main from './components/Main';
import Hws from './components/Hws';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
      <br /><br />
      <Hws></Hws>
      <Footer></Footer>
    </div>
  );
}

export default App;
