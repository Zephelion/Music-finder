import SearchBar from "./SearchBar"

const SearchContainer = ({func}) => {

  return (

		<div className="container mx-auto bg-white rounded-lg p-14 drop-shadow-lg border-solid border-2 border-gray-100">
			<SearchBar songs={func}/>
		</div>
  )
}

export default SearchContainer