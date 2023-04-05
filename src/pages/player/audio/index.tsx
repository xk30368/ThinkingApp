import React, { useState } from 'react';
import { useModel } from 'umi';
import { Button, Checkbox, Row, Col } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { ISongAttr } from './config/Interface';
import { HeartOutlined, PlusOutlined, DownloadOutlined, DeleteOutlined, ClearOutlined } from '@ant-design/icons';
import './index.less';
import * as config from './config';
import Cover from './cover';
import FtPlayer from '@/pages/player/audio/ft_player';

const MiddleBox:React.FC<{ children: React.ReactNode; height: number }> = (props) => (
  <div className={`song-middle-height-${props.height}`}>{props.children}</div>
)

const Audio: React.FC = () => {
  // 获取数据流model的参数
  const { songList, songData, UPDATE_SONG_ITEM_DATA } = useModel('audioModel', (model) => ({
    songList: model.songList,
    songData: model.songData,
    UPDATE_SONG_ITEM_DATA: model.UPDATE_SONG_ITEM_DATA,
  }) );
  console.log(songData);
  const { songToolbarBtn, SONG_BUTTON, SONG_TABLE_HEADER } = config;
  // @ts-ignore
  const [checkList, setCheckedList] = useState<ISongAttr>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const toolIconList = [
    <HeartOutlined />,<PlusOutlined />,<DownloadOutlined />,<DeleteOutlined />, <ClearOutlined />,
  ];

  const onCheckAll = (e: CheckboxChangeEvent) => {
    console.log(e);
  }

  const flexCol = (type: string) => {
    let flex: any = 2;
    switch (type) {
      case '歌曲':
        flex = '60%';
        break;
      case '歌手':
        flex = '20%';
        break;
      case '时长':
        flex = 2;
      default:
        flex = 'auto';
    }
    return flex;
  }

  // 更新songData
  const onHandleSongData = (data: any) => {
    UPDATE_SONG_ITEM_DATA(data);
  }

  return (
    <div className="audio-container">
      <div className="audio-player">
        <div className="player-normal">
          <div className="song-list-toolbar">
            { Object.keys(songToolbarBtn).map((val, index) => {
              return (
                <Button key={`${val}_${index}`} icon={toolIconList[index]} className="tool-btn">{SONG_BUTTON[index]}</Button>
              )
            }) }
          </div>
          <div className="song-list-main main-viewport">
            <div className="list-overview">
              <div className="list-view">
                <Row className="list-header">
                  <Col flex={'80px'} className="list-header-item list-header-check">
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAll} checked={checkAll}></Checkbox>
                  </Col>
                  {SONG_TABLE_HEADER.map(item => <Col key={item} flex={flexCol(item)} className={`list-header-item`}>{item}</Col>)}
                </Row>
                {songList && songList.map((item: any,index: number) => <Row onClick={()=> { onHandleSongData(item) } } key={`song-${index}`} className="list-song" align="middle">
                  <Col flex={'80px'} className="song-item song-item-check">
                    <MiddleBox height={40}><Checkbox className="song-item-check"></Checkbox></MiddleBox>
                  </Col>
                  <Col flex={'60%'} className="song-item song-item-name"><MiddleBox height={40}>{item.songTitle}</MiddleBox></Col>
                  <Col flex={'20%'} className="song-item song-item-singer"><MiddleBox height={40}>{item.singer && item.singer.join('/')}</MiddleBox></Col>
                  <Col flex={'auto'} className="song-item song-item-time"><MiddleBox height={40}>{item.time}</MiddleBox></Col>
                </Row>)}
              </div>
            </div>
          </div>
          <Cover songData={songData} />
        </div>
      </div>
      <FtPlayer songData={songData} />
    </div>
  )
}

export default Audio;