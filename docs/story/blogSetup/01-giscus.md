---
sidebar_label: Docusaurus 添加评论
---
# Docusaurus 添加评论功能
## giscus

giscus 是以 github Discussions 为基座开发的评论系统。详细阅读 [官网](https://giscus.app/zh-CN)，在上面简单的可视化选择，就可以获取所需要的配置

```json
{
    "repo": "",
    "repoId": "",
    "category": "",
    "categoryId": "",
}
```

## 配置 giscus
我们使用基于 giscus 封装的 react [组件库](https://github.com/giscus/giscus-component#readme)

封装代码如下


```tsx
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export const Comment = () => {
  const { colorMode } = useColorMode();
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        repo="BlackBerry009/blackberry009.github.io"
        repoId="R_kgDOIFWOfg"
        category="Announcements"
        categoryId="DIC_kwDOIFWOfs4CR5M9"
        mapping="title"
        strict="1"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
```
## 使用
由于 docusaurus 内部隐藏封装了很多组件，需要深层定制的话，需要把里面的暴露出来，类似 `react-app-rewired` 暴露自身的 webpack 配置一样。

官方提供[两种](https://docusaurus.io/docs/swizzling)，一种是 eject：在源代码中进行直接修改。一种是 wrap：在源代码之上进行包裹一层。

我们选择 wrap 的方式，在编码过程中也是需要做到尽量不要侵入源码，react HOC 的原则。
## 更改内部组件
docusaurus 内部有很多组件，可以运行 `yarn run swizzle` 查看。

:::tip
如果不是用的 ts 搭建，则不需要后面的--typescript
:::


### 文档类型
```sh
yarn run swizzle @docusaurus/theme-classic DocItem/Layout -- --wrap --typescript
```

```tsx title="theme/DcoItem/Layout/index.tsx"
import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Comment from '../../../components/Comments';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
      <Comment />
    </>
  );
}

```
### 博客类型
官方展示的代码中，Blog 添加评论是更改 BlogPostPage 组件，这里有个小坑。

如果使用 eject 更改没有问题，如果使用 wrap 方式，则会有样式问题。

BlogPostPage 组件 wrap 一下 发现是 100vw 的屏，不是 blog 那一块。

![blog-mess-style](/img/blog-style.png)

swizzle 一下看 blog 相关的组件有什么，调试一下，发现有个 Container，BlogPostItem 等等可以用，或多或少都有些 bug，比如：总览文章页，每个文章下面都会显示评论组件，但我只想在文章详情页需要，看起来只有 BlogPostPage 最适合，但是 wrap 一下会有样式问题，所以这里还是选择 eject。

```sh
yarn run swizzle @docusaurus/theme-classic BlogPostPage -- --eject --typescript
```


```tsx title="theme/BlogPostPage/index.tsx"
<BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>
      // highlight-next-line
      <Comment />
      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
```

至此，完成了添加自定义评论组件，重新运行一下即可 🎉


