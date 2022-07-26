import Song from './Song'

const Songs = ({songs}) => {
  return (
    <>
      <div className="container mx-auto">

        {songs.map((song) => (
          <Song key={song.track.track_id} song={song} />
        ))}
      </div>
    
    </>
  )
}

export default Songs