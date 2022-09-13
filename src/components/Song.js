import axios from "axios";
import {useState} from 'react';
// import Modal from "./Modal";

const Song = ({song, lyric}) => {

  const [lyrics, setLyrics] = useState("");

  const handleClick = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${lyric}&apikey=${process.env.REACT_APP_API_KEY}`;
    axios({
      url: url,
      method:"GET",
    })
    .then(res => {
      console.log(res.data.message.body.lyrics.lyrics_body);
      console.log(lyrics);
      setLyrics(res.data.message.body.lyrics.lyrics_body);
    })

  }

  return (
    <div onClick={handleClick} className="container bg-white drop-shadow-sm rounded-md p-4 flex mb-4 border-solid border-2 border-gray-100 h-32">
      <div className="bg-indigo-300 w-28 rounded-md mr-4">
      </div>
      <div>
        <p className="text-lg font-semibold">{song.track.track_name} - {song.track.artist_name}</p>
        <p className="text-md font-medium">{song.track.album_name}</p>
      </div>


    </div>
  )
}

export default Song