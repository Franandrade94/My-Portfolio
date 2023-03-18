import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrincipalPage from './PrincipalPage/PrincipalPage';


function App() {
  return (
    <div className="App" id='root'>
      <Router>
        <Routes>
           
          <Route path="/" exact Component={PrincipalPage} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
