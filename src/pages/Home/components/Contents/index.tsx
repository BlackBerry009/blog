import { ArticleItem } from '@/components/ArticleItem';
import { CoupleCard } from '@/components/CoupleCard';
import { Swiper } from '@/components/Swiper';
import { UserCard } from '@/components/UserCard';
import './index.less';

type Props = {};

export const Contents = (props: Props) => {
  return (
    <div className="contents">
      <div className="contents__article-list">
        <ArticleItem />
      </div>
      <div className="contents__right-side">
          <UserCard />
          <CoupleCard/>
          <Swiper />
      </div>
    </div>
  );
};
