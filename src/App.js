import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <Homepage/>
    </div>
  );
}

export default App;
