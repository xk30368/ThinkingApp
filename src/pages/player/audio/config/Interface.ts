export interface IAudioProps {
  songList: any,
  loading: boolean,
  updateSongList: void,
}

/**
 * @author ysj
 * @description 定义歌曲对象接口
 * @param sid 歌曲主键 唯一值
 * @param songTitle 歌名
 * @param singer 歌手
 * @param album 专辑
 * @param cover 歌曲封面
 * @param comments 评论数
 * @param likes 喜欢数量
 * @param collections 收藏数
 * @param downloads 下载数
 * @param time 时长
 * */
export interface ISongAttr {
  readonly sid: number,
  songTitle: string,
  singer: any,
  album: string,
  cover?: string,
  comments: number,
  like: boolean,
  collections: number,
  downloads: number,
  time: any,
}