import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrincipalPage from './PrincipalPage/PrincipalPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" exact Component={PrincipalPage} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
