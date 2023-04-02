import React from 'react';
import { ISongAttr } from '../config/Interface';

const Cover: React.FC<{ songData: ISongAttr }> = (props) => {
  const { cover, album, singer, songTitle } = props.songData;

  return (
    <div className="song-info">
      <div className="song-info-head">
        <a className="song-info-head-cover"><img alt={songTitle} src={cover || ''} /></a>
        <div className="song-info-head-title">{songTitle}</div>
        <div className="song-info-head-singer">{singer.join(' / ')}</div>
        <div className="song-info-head-album">{album}</div>
      </div>
      <div className="song-info-lyric"></div>
    </div>
  )
}

export default Cover;