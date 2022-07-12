import SearchBar from "./SearchBar"

const Search = () => {
  return (
	<div className="min-h-screen bg-white flex justify-center items-center">
		<div className="container mx-auto bg-white rounded-lg p-14 drop-shadow-lg border-solid border-2 border-gray-100">
			<SearchBar />
		</div>
	</div>
  )
}

export default Search