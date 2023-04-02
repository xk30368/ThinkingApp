import { useState, useCallback, useEffect } from "react";
import { ISongAttr } from '@/pages/player/audio/config/Interface';
import coverURL from '@/assets/audio/sgbmdw.webp';
// audio hooks 用法
const AudioModel = () => {
  const [songList, setSongList] = useState([
    { sid: 0, songTitle: '时光背面的我', singer: ['刘至佳','韩彤'], album: '时光背面的我', cover: coverURL, comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 1, songTitle: '星晴', singer: ['周杰伦'], album: 'Jay', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 2, songTitle: '半生雪', singer: ['七叔(叶哲浩)'], album: '半生雪', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 3, songTitle: 'Flower dance', singer: ['昼夜'], album: '囿于昼夜', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 4, songTitle: '南半球与北海道', singer: ['范倪Liu'], album: '南半球与北海道', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 5, songTitle: '来迟', singer: ['戴羽彤'], album: '来迟', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 6, songTitle: '不如', singer: ['秦海清'], album: '不如', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
    { sid: 7, songTitle: '春三月', singer: ['司南'], album: '春三月', cover: '', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  ]);
  const [songData, setSongData] = useState<ISongAttr>(
    { sid: 0, songTitle: '时光背面的我', singer: ['刘至佳','韩彤'], album: '时光背面的我', cover: coverURL, comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  );
  const [loading, setLoading] = useState(false);
  // 捅过api请求用法
  useEffect(() => {
    // getList().then((res) => {
    //   setLoading(true);
    //   setSongList(res);
    //   setLoading(false);
    // });
  }, []);

  // 类reducers用法 入参list
  const UPDATE_SONG_ITEM_DATA = useCallback((data: any) => setSongData(data), [songData]);

  return {
    songList,
    songData,
    loading,
    UPDATE_SONG_ITEM_DATA,
  }
}

export default AudioModel;