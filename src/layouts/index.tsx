import React from 'react';
import { Outlet } from 'umi';
import { Layout, ConfigProvider, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const Layouts: React.FC = () => (
  <ConfigProvider
    theme={{
      /*
      * 通过修改算法可以快速生成风格迥异的主题，5.0 版本中默认提供三套预设算法，分别是
      * 默认算法 theme.defaultAlgorithm
      * 暗色算法 theme.darkAlgorithm
      * 紧凑算法 theme.compactAlgorithm
      * */
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <Layout className="ysj_layout">
      <Header>
        <div className="logo" />
        <div>11</div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        Ysj个人网站
      </Footer>
    </Layout>
  </ConfigProvider>
)
export default Layouts;