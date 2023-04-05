import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { ISongAttr } from '../config/Interface';
import { StepBackwardFilled, CaretRightFilled, StepForwardFilled, PauseOutlined } from '@ant-design/icons';
import '../index.less'

// 按钮枚举
enum playerBtn {
  prev = '上一首',
  play = '开始',
  next = '下一首',
}

enum playerPauseBtn {
  prev = '上一首',
  pause = '暂停',
  next = '下一首',
}

// 定义icon对象
const playerBtnIcon = {
  prev: <StepBackwardFilled />,
  play: <CaretRightFilled />,
  pause: <PauseOutlined />,
  next: <StepForwardFilled />,
}

const FtPlayer: React.FC<{ songData: ISongAttr }> = (props) => {
  // const { cover, album, singer, songTitle } = props.songData;
  const [btnStatus, setBtn] = useState(false);
  const getIconBtn = (obj: any, key: string) => {
    return obj[key];
  }

  const switchSong = (status: string) => {
    const str = status !== 'pause' || false;
    setBtn(str);
  }

  return (
    <div className="audio-player-ft">
      <Row justify="center" align="middle" className="player-ft-container">
        <Col span={4} className="ft-btn ft-flex">
          {
            Object.keys(!btnStatus ? playerBtn : playerPauseBtn).map((item:string) => <a key={`ft-btn-${item}`} className={`ft-btn-${item}`} onClick={() => switchSong(item)}>
              {getIconBtn(playerBtnIcon, item)}
            </a>)
          }
        </Col>
        <Col span={12} className="ft-progress ft-flex">

        </Col>
        <Col span={6} className="ft-tool ft-flex">

        </Col>
        <Col span={2} className="ft-voice ft-flex">

        </Col>
      </Row>
    </div>
  )
}

export default FtPlayer;