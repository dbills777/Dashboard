import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/home/home'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <SideBar />
      <Home />
      </div>
    </div>
  );
}

export default App;
