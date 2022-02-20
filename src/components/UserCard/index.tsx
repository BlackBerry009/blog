import { Avatar, Card } from 'antd';
import avatarImg from '@/assets/img/avatar.jpg';
import './index.less';

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
    <Card className="user-info">
      <div className="user-info__avatar">
        <Avatar src={avatarImg} size={80} />
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
      <div className="user-info__icons"></div>
    </Card>
  );
};
