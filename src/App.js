import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pets from './components/Pets';

function App() {
   
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pets" element={<Pets/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
