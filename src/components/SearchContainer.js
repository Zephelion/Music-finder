import SearchBar from "./SearchBar"

const SearchContainer = () => {

	const pull_data = (data) => {
		console.log(data);
	}

  return (

		<div className="container mx-auto bg-white rounded-lg p-14 drop-shadow-lg border-solid border-2 border-gray-100">
			<SearchBar
				func = {pull_data}
			/>
		</div>
  )
}

export default SearchContainer