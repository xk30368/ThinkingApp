import React from 'react';
import { Progress } from 'antd';

const Loading: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Progress percent={0.0} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
  </div>
)

export default Loading;