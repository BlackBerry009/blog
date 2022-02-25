import React from 'react';
import './index.less';
import { Image } from 'antd';
import avatarImg from '@/assets/img/avatar.jpg';

type Props = {};

export const CoupleCard = (props: Props) => {
  return (
    <div className="couple-card">
      <div className="couple-card__left">
        <Image
          preview={false}
          className="couple-card__left--img"
          src={avatarImg}
        ></Image>
      </div>
      <div className="couple-card__mid">❤️</div>
      <div className="couple-card__right">
        <Image
          preview={false}
          className="couple-card__left--img"
          src={avatarImg}
        ></Image>
      </div>
    </div>
  );
};
