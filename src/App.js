import './App.css';
import SearchContainer from './components/SearchContainer';
import Song from './components/Song';

function App() {
  return (
    <div>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <SearchContainer />
      </div>
      
      <Song />
    </div>
  );
}

export default App;
