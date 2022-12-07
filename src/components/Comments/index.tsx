import Giscus from '@giscus/react';

export const Comment = () => {
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
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;