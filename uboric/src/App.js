import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import AllRoutes from './Components/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
