import { Carousel } from 'antd';

type Props = {};

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const Swiper = (props: Props) => {
  return (
    <Carousel style={{width: 300}}>
      <div>
        <h3 style={{...contentStyle}}>1</h3>
      </div>
      <div>
        <h3 style={{...contentStyle}}>2</h3>
      </div>
      <div>
        <h3 style={{...contentStyle}}>3</h3>
      </div>
    </Carousel>
  );
};
