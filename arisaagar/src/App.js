import saveTheDate from './SaveTheDatePhoto.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saveTheDate} className="App-logo" alt="Sakura" />
        <p>
          Don't get too excited. Check back again in a month!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/p/CjS20_oOtEm/?fbclid=IwAR2tomPqzLPEF2QcH8FHfWzWt06pm4XwJ07g9riUqL5DXMbdwR7s1HsDr2s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Save the Date!
        </a>
      </header>
    </div>
  );
}

export default App;
