import { SearchOutlined } from '@ant-design/icons';
import { useScroll } from 'ahooks';
import { Input } from 'antd';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import './index.less';

export default function PageHeader() {
  const scroll = useScroll(document);

  return (
    <div
      className={classnames('header', { transparent: Number(scroll?.top) <= 200 })}
    >
      {Number(scroll?.top) > 200 && (
        <div className="header__logo">Blackberry's blog</div>
      )}
      <div className="header__search">
        <Input
          placeholder="Enter key to search"
          prefix={<SearchOutlined />}
          allowClear
          style={{ borderRadius: 20 }}
        />
      </div>
      <div className="header__nav">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/home">归档</NavLink>
        <NavLink to="/home">分类</NavLink>
        <NavLink to="/comments">留言</NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/friend">友链</NavLink>
      </div>
    </div>
  );
}
