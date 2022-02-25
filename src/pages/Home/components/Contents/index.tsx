import { ArticleItem } from '@/components/ArticleItem';
import { ArticleList } from '@/components/ArticleList';
import { CoupleCard } from '@/components/CoupleCard';
import { Swiper } from '@/components/Swiper';
import { TagCard } from '@/components/TagCard';
import { UserCard } from '@/components/UserCard';
import './index.less';

type Props = {};

export const Contents = (props: Props) => {
  return (
    <div className="contents">
      <div className="contents__article-list">
        <ArticleList articleList={[1, 2, 3, 4, 5]} />
      </div>
      <div className="contents__right-side">
        <UserCard />
        <CoupleCard />
        <Swiper />
        <TagCard />
      </div>
    </div>
  );
};
