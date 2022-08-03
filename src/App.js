import './App.css';
import SearchContainer from './components/SearchContainer';
import axios from "axios";
import Songs from './components/Songs';
import Loading from './components/Loading';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "Music Finder";
  },[]);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const getSongs = (searchTerm) => {
    setLoading(true);
    const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${searchTerm}&page_size=10000&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`;
    axios({
      url: url,
      method:"GET",
    })
    .then(res => {
      console.log(res.data.message.body.track_list);
      setSearchResults(res.data.message.body.track_list);
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
      <Songs songs={searchResults} />
    </div>
  );
}

export default App;
