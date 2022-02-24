import { ArticleItem } from "../ArticleItem"

type Props = {
    articleList: any[]
}

export const ArticleList = (props: Props) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }}>
    {props.articleList.map(article => (
        <ArticleItem {...article}/>
    ))}
    </div>
  )
}