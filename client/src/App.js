import './App.css';
import { 
  NavBar,
  Hero,
  Welcome,
  CallToAction,
 } from './components/index';

 //End of imports

 //Styled HTML elements with styled components.

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
