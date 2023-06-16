import './index.css';
import Label from './components/Label';

function App() {
  return (
    <div className="App">
      <nav>
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
        <h3>WORK</h3>
      </nav>

      <div className="ball"></div>

      <div className="labels">
        <Label color="#E32F2F" text="yoga"/>
        <Label color="#492FE3" text="energy"/>
        <Label color="#2FE3B8" text="meditate"/>
      </div>
      
    </div>
  );
}

export default App;
