import React from 'react';
import './index.less';
import { CategoryTag } from '../CategoryTag';
import { Card } from 'antd';

type Props = {};

export const ArticleItem = (props: Props) => {
  return (
    <Card className="article-item" hoverable bordered={false}>
      <div className="article-item__title">这是一个标题</div>
      <div className="article-item__time">2022/10/2 13:20:05</div>
      <div className="article-item__tags">
        <CategoryTag />
      </div>
    </Card>
  );
};
