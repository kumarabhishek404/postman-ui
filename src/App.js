import logo from './logo.svg';
import Body from './Components/body/index';
import './App.css';
import Sidebar from './Components/sidebar';

function App() {
  return (
    <div className="App">
      <div className='w-100 h-100 d-flex '>
        <div className='w-25'>
          <Sidebar />
        </div>
        <div className='w-75'>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;