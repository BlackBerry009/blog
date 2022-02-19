import { NavLink } from 'react-router-dom';
import './index.less';

export default function PageHeader() {
  return (
    <div className="nav-header">
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/article">文章</NavLink>
      <NavLink to="/comments">留言</NavLink>
      <NavLink to="/about">关于</NavLink>
    </div>
  );
}
