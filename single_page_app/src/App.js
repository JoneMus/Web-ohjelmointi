import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contactus' element={<ContactUs/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
          </div>
          <Footer />       
    </>
  );
}

export default App;