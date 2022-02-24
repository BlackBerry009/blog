import { useEffect, useState } from 'react';
import './index.less';
import img1 from '@/assets/img/1.jpeg';
import img2 from '@/assets/img/2.jpeg';
import img3 from '@/assets/img/3.jpeg';
import img4 from '@/assets/img/4.jpeg';
import img5 from '@/assets/img/5.jpeg';
import logoGif from '@/assets/img/logo.gif';
import {Image} from 'antd'

type Props = {};

const ImgList = [img1, img2, img3, img4, img5];

export const Banner = (props: Props) => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    const url = ImgList[Math.floor(Math.random() * 5)];
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
      <div className="banner__logo">
        <Image src={logoGif} preview={false} className="banner__logo--img"/>
      </div>
      <div className="banner__slogan">
        <div className="banner__slogan--top">
          说说我的生活
        </div>
        <div className="banner__slogan--bottom">Don't cry, do laugh</div>
      </div>
    </div>
  );
};
