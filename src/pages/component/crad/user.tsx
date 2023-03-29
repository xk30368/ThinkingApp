import React from 'react';
import imgUrl from "@/assets/img/tou_x.jpg";
import { Link } from 'umi';
import { GithubOutlined, WeiboCircleOutlined, ZhihuOutlined, AlipayCircleOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import './index.less';

const User: React.FC = () => {
  const svgStyle = {
    fontSize: '1.4em',
    // color: mainStyles.mainColor,
  }
  return (
    <div className="ysj-card">
      <div className="ysj-card-imgBox">
        <img src={imgUrl} alt="" />
      </div>
      <div className="ysj-card-content">
        <div className="ysj-card-content-details">
          <h2>云思绝<br /><span>欢迎访问云思绝个人空间</span></h2>
          <div className="details-data">
            <h3>234<br /><span>文章</span></h3>
            <h3>20<br /><span>视频</span></h3>
            <h3>14<br /><span>专栏</span></h3>
          </div>
          <ul className="details-link">
            <li><Link to="/"><GithubOutlined className="icon-github" style={svgStyle} /></Link></li>
            <li><Link to="/"><ZhihuOutlined className="icon-zh" style={svgStyle} /></Link></li>
            <li><Link to="/"><WechatOutlined className="icon-wechat" style={svgStyle} /></Link></li>
            <li><Link to="/"><WeiboCircleOutlined className="icon-weibo" style={svgStyle} /></Link></li>
            <li><Link to="/"><AlipayCircleOutlined className="icon-alipay" style={svgStyle} /></Link></li>
            <li><Link to="/"><QqOutlined className="icon-qq" style={svgStyle} /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User;
