import { useState } from "react";
// import {trackPromise} from 'react-promise-tracker';

const SearchBar = ({songs}) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    
    const sendSearchTerm = async (e) => {
        e.preventDefault();
        if(searchTerm !== ""){
            songs(searchTerm);

        }else{
            alert("Please enter a search term");
        }
        
        

    }
    
  return (

    <form onSubmit={sendSearchTerm}>
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