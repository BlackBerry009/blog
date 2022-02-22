import { Avatar, Card } from 'antd';
import avatarImg from '@/assets/img/avatar.jpg';
import './index.less';
import {
  AlipayCircleOutlined,
  GithubOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons';

type Props = {};

const data = [
  {
    id: 1,
    name: '文章',
    count: 43,
  },
  {
    id: 2,
    name: '标签',
    count: 23,
  },
];

export const UserCard = (props: Props) => {
  return (
    <Card
      className="user-info"
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <div className="user-info__avatar">
        <div
          className="user-info__avatar__bg"
          style={{ backgroundImage: `url(${avatarImg})` }}
        ></div>
        <Avatar className='user-info__avatar--content' src={avatarImg} size={80} />
      </div>
      <div className="user-info__name">小艺术家</div>
      <div className="user-info__publish">
        {data.map((d) => (
          <div key={d.id}>
            <div className="user-info__publish__name">{d.name}</div>
            <div className="user-info__publish__count">{d.count}</div>
          </div>
        ))}
      </div>
      <div className="user-info__icons">
        <GithubOutlined className="user-info__icons__item" />
        <WechatOutlined className="user-info__icons__item" />
        <QqOutlined className="user-info__icons__item" />
        <AlipayCircleOutlined className="user-info__icons__item" />
        <MailOutlined className="user-info__icons__item" />
      </div>
    </Card>
  );
};
