import { useState } from "react";
import axios from "axios";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const fetchMusic = async (e) => {
        e.preventDefault();

        const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${searchTerm}&page_size=10000&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`;
        // const test = "https://www.balldontlie.io/api/v1/players";
        // const response = await fetch(url, {
        //     method: "GET",
        //     mode: "no-cors",
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Access-Control-Allow-Origin':'*',
        //         'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS',
        //         "Access-Control-Request-Headers": 'Content-Type, Authorization'
        //     }
        // });

        axios({
            url: url,
            method:"GET",
            // mode: 'no-cors',
            // headers:{
            //     "Content-Type": "application/json",
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Request-Headers": 'Content-Type, Authorization'
    
            // }
        })
        .then(res => {
            console.log(res);
            setSearchResults(res.data.message.body.track_list);
        })
        .then(() => {
            console.log(searchResults);
        })
        .catch(err =>{
            console.log(err);
        })

    }

  return (

    <form onSubmit={fetchMusic}>
        <h1 className="text-center font-light text-black text-4xl">Music Finder</h1>
            <p className="mx-auto font-normal text-sm my-6 max-w-lg text-center">Look for your favorite song based on the lyrics you have heard</p>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                <input onChange={(e) => setSearchTerm(e.target.value) } className="text-base text-gray-400 flex-grow outline-none px-2 py-3 border-solid border-2 border-gray-100 rounded-lg " type="search" placeholder="Search your lyrics" />
                <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                    <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
                </div>
            </div>
    </form>
  )

}



export default SearchBar