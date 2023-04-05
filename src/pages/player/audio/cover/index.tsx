import React from 'react';
import { ISongAttr } from '../config/Interface';

const Cover: React.FC<{ songData: ISongAttr }> = (props) => {
  const { cover, album, singer, songTitle } = props.songData;

  return (
    <div className="song-info">
      <div className="song-info-head">
        <a className="song-info-head-cover"><img className="song-info-pic" alt={songTitle} src={cover || ''} /></a>
        <div className="song-info-head-title song-info-view">{songTitle}</div>
        <div className="song-info-head-singer song-info-view">{singer.join(' / ')}</div>
        <div className="song-info-head-album song-info-view">{album}</div>
      </div>
      <div className="song-info-lyric">
        <div className="song-info-lyric-box">
          <p>歌词功能开发中...</p>
        </div>
      </div>
    </div>
  )
}

export default Cover;