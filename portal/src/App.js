import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Home/>}/>

        </Routes>
    </Router>
    </div>
  );
}

export default App;