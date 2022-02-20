import { Input } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';

export default function PageHeader() {
  return (
    <div className="header">
      <div className="header__logo">Blackberry's blog</div>
      <div className="header__search">
        <Input />
      </div>
      <div className="header__nav">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/home">归档</NavLink>
        <NavLink to="/home">分类</NavLink>
        <NavLink to="/comments">留言</NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/friend">友链</NavLink>
        <NavLink to="/github">github</NavLink>
      </div>
    </div>
  );
}
