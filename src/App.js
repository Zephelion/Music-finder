import './App.css';
import SearchContainer from './components/SearchContainer';
import axios from "axios";
import Songs from './components/Songs';
import {useState} from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const getSongs = (searchTerm) => {

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

  }


  return (
    <div>
      <div className="my-10 bg-white flex justify-center items-center">
        <SearchContainer func={getSongs} />
      </div>
      
      <Songs songs={searchResults} />
    </div>
  );
}

export default App;
