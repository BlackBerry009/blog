import { ArticleList } from '@/components/ArticleList'
import './index.less'

type Props = {}

const Category = (props: Props) => {
  return (
    <div className='category'>
      <div className="category__article-list">
        <ArticleList articleList={[1,2,3,4]}/>
      </div>
    </div>
  )
}
export {
    Category
}