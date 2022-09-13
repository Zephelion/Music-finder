import Song from './Song'
// import { useState }  from 'react';

const Songs = ({songs}) => {


  return (
    <>
      <div className="container mx-auto">

      {songs.length > 0 ? <h2 className="text-xl mb-4 font-thin">Results: {songs.length}</h2> : null}

        {songs.map((song) => (
          <Song key={song.track.track_id} song={song} lyric={song.track.track_id} />
        ))}
      </div>
    
    </>
  )
}

export default Songs