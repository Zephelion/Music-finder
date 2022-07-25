// import Song from './Song'

const Songs = ({songs}) => {
  return (
    <>
      {songs.map((song, index) => (
        // <Song key={song.track_id} song={song} />
        <p key={index}>
          {song.track.track_name}
        </p>
      ))}
    
    </>
  )
}

export default Songs