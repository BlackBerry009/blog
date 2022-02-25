import React from 'react';
import './index.less';
import { Image, Tag } from 'antd';

type Props = {};

const tagList = ["ad", '按到', 'vv', '按到', '阿萨德', '发v', '本公告'];
const tagColors = ['#3eaf7c', '#8e44ad', '#909399', '#e6a23c', '#171d20', '#185a9d']


export const TagCard = (props: Props) => {
  return (
    <div className="tag-card">
      {tagList.map(tag => (
        <Tag className='tag-card__tag' color={tagColors[Math.floor(Math.random() * 6)]}>{tag}</Tag>
      ))}
    </div>
  );
};
