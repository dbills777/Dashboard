import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <SideBar />
        <div className='others'>Other Pages</div>
      </div>
    </div>
  );
}

export default App;
