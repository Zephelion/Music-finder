const Song = ({song}) => {
  return (
    <div className="container bg-white drop-shadow-sm rounded-md p-4 flex mb-4 border-solid border-2 border-gray-100 h-32">
      <div className="bg-indigo-300 w-28 rounded-md mr-4">
        {/* <img src={song.track.album_coverart_350x350} alt="album cover" /> */}
      </div>
      <div>
        <p className="text-lg font-semibold">{song.track.track_name} - {song.track.artist_name}</p>
        <p className="text-md font-medium">{song.track.album_name}</p>
      </div>
    </div>
  )
}

export default Song