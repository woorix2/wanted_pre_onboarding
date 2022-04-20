import './App.css';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle />
      <hr />
      <Tab />
      <hr />
      <Slider />
    </div>
  );
}

export default App;
