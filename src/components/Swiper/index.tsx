import { Carousel, Image } from 'antd';
import img1 from '@/assets/img/1.jpeg';
import img2 from '@/assets/img/2.jpeg';
import img3 from '@/assets/img/3.jpeg';
import img4 from '@/assets/img/4.jpeg';
import img5 from '@/assets/img/5.jpeg';
import './index.less'

type Props = {};

const ImgList = [img1, img2, img3, img4, img5];

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const Swiper = (props: Props) => {
  return (
    <Carousel
      style={{ width: 300, height: 300, borderRadius: 10 }}
      autoplay
      dotPosition="right"
    >
      {ImgList.map((imgUrl, index) => (
        <Image
          src={imgUrl}
          key={index}
          width={300}
          height={300}
          preview={false}
          className='swiper-img'
        />
      ))}
    </Carousel>
  );
};
