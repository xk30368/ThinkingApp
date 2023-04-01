import React, { useState } from 'react';
import { Button, Checkbox, Row, Col } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { songAttr } from './config';
import { HeartOutlined, PlusOutlined, DownloadOutlined, DeleteOutlined, ClearOutlined } from '@ant-design/icons';
import './index.less';
import * as config from './config';

const CheckboxGroup = Checkbox.Group;

const MiddleBox:React.FC<{ children: React.ReactNode; height: number }> = (props) => (
  <div className={`song-middle-height-${props.height}`}>{props.children}</div>
)

const Audio: React.FC = () => {
  const { songToolbarBtn, SONG_BUTTON, SONG_TABLE_HEADER, songList } = config;
  // @ts-ignore
  const [checkList, setCheckedList] = useState<songAttr>([]);
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
        flex = '68%';
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
                {songList && songList.map((item,index) => <Row className="list-song" align="middle">
                  <Col flex={'80px'} className="song-item song-item-check">
                    <MiddleBox height={40}><Checkbox className="song-item-check"></Checkbox></MiddleBox>
                  </Col>
                  {/*<Col flex={1} className="song-item song-item-num">{index + 1}</Col>*/}
                  <Col flex={'68%'} className="song-item song-item-name"><MiddleBox height={40}>{item.songTitle}</MiddleBox></Col>
                  <Col flex={'20%'} className="song-item song-item-singer"><MiddleBox height={40}>{item.singer && item.singer.join('/')}</MiddleBox></Col>
                  <Col flex={'auto'} className="song-item song-item-time"><MiddleBox height={40}>{item.time}</MiddleBox></Col>
                </Row>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audio;