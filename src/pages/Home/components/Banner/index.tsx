import React, { useEffect, useState } from 'react';
import './index.less';
import img1 from '@/assets/img/1.jpeg';
import img2 from '@/assets/img/2.jpeg';
import img3 from '@/assets/img/3.jpeg';
import img4 from '@/assets/img/4.jpeg';
import img5 from '@/assets/img/5.jpeg';

type Props = {};

const ImgList = [img1, img2, img3, img4, img5];

export const Banner = (props: Props) => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    const url = ImgList[Math.floor(Math.random() * 5)];
    console.log('asdsd', url);
    setImgUrl(url);
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__logo"></div>
      <div className="banner__slogan"></div>
    </div>
  );
};
