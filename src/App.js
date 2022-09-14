import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  return (
    <div className="container">
      <InputShortener/>
      <BackgroundAnimate/>
      <LinkResult/>
      
    </div>
  );
}

export default App;
