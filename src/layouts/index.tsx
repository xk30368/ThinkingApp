import React, { useEffect } from 'react';
import { Outlet, useModel } from 'umi';
import { Layout, ConfigProvider } from 'antd';
import Nav from './nav';

const { Content, Footer } = Layout;

interface IData {
  initialState: any,
  loading: boolean,
  refresh: void,
}

const Layouts: React.FC = () => {
  // const { initialState } = useModel('@@initialState');
  useEffect(() => {
    listenerScroll(); // 监听滚轮事件
  },[]);

  const listenerScroll = () => {
    window.addEventListener("scroll", () => {
      let header = document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
  }
  return (
    <ConfigProvider
      theme={{
        /*
         * 通过修改算法可以快速生成风格迥异的主题，5.0 版本中默认提供三套预设算法，分别是
         * 默认算法 theme.defaultAlgorithm
         * 暗色算法 theme.darkAlgorithm
         * 紧凑算法 theme.compactAlgorithm
         * */
        // algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#4cdc9b',
        },
      }}
      >
        <Layout className="ysj-layout">
          <Nav />
          <Content>
            <Outlet />
          </Content>
          {/*<Footer>*/}
          {/*</Footer>*/}
        </Layout>
      </ConfigProvider>
  )
}
export default Layouts;