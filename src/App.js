import './App.css';
import SearchContainer from './components/SearchContainer';
import axios from "axios";
import Songs from './components/Songs';
import Loading from './components/Loading';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [hasSearchTerm, setHasSearchTerm] = useState(false);

  useEffect(() => {
    document.title = "Music Finder";
  },[]);



  const getSongs = (searchTerm) => {
    setLoading(true);
    setHasSearchTerm(searchTerm !== "");
    const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${searchTerm}&page_size=10000&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`;
    axios({
      url: url,
      method:"GET",
    })
    .then(res => {

      const results = res.data.message.body.track_list || [];
      setHasResults(results.length > 0 ? true : false);
      console.log(results);
      setSearchResults(results);


    })
    .catch(err =>{
        console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })

  };



  return (
    <div>
      <div className="minimum bg-white flex justify-center items-center">
        <SearchContainer func={getSongs} />
      </div>
    
      {loading ? <Loading /> : null}
      {!hasResults && hasSearchTerm ? <p>No songs matching the lyrics</p> : <Songs songs={searchResults} />  }
    </div>
  );
}

export default App;
