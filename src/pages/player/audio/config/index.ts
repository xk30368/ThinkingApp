/**
 * @author ysj
 * @description 歌曲列表工具栏
 * @enum collection,add,download,delete,clear
 * */
enum songToolbarBtn {
  collection = '收藏',
  add = '添加到',
  download = '下载',
  delete = '删除',
  clear = '清空',
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
 * @param likes 新否收藏喜欢
 * @param collections 收藏数
 * @param downloads 下载数
 * */

const songList = [
  { sid: 0, songTitle: '时光背面的我', singer: ['刘至佳','韩彤'], album: '时光背面的我', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 1, songTitle: '星晴', singer: ['周杰伦'], album: 'Jay', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 2, songTitle: '半生雪', singer: ['七叔(叶哲浩)'], album: '半生雪', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 3, songTitle: 'Flower dance', singer: ['昼夜'], album: '囿于昼夜', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 4, songTitle: '南半球与北海道', singer: ['范倪Liu'], album: '南半球与北海道', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 5, songTitle: '来迟', singer: ['戴羽彤'], album: '来迟', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 6, songTitle: '不如', singer: ['秦海清'], album: '不如', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
  { sid: 7, songTitle: '春三月', singer: ['司南'], album: '春三月', cover: '@/assets/music/sg.mp3', comments: 999, like: true, collections: 99999, downloads: 52312, time: '03:01' },
]

// 音乐工具栏 数组
const SONG_BUTTON: Array<string> = ['收藏','添加到','下载','删除','清空'];

// view音乐dom头
const SONG_TABLE_HEADER: Array<string> = ['歌曲','歌手','时长'];


export { songToolbarBtn, SONG_BUTTON, SONG_TABLE_HEADER, songList };