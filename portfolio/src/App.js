import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import Services from './components/services/services';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services/>} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
