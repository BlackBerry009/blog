import { AiFillGithub } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import dynamic from 'next/dynamic'
import React from 'react';

const Cusdis = dynamic(() => import("nextra-theme-blog/cusdis"));

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © BlackBerry.
      <a href="/feed.xml">
        <BiRss />
      </a>
      <a
        href="https://github.com/BlackBerry009/blog"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <style jsx>{`
        a {
          float: right;
          margin-left: 20px;
          font-size: 16px;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: true,
  cusdis: {
    appId: '1137a882-35a0-464a-9d29-b45730be0357',
  },
  comments: <Cusdis />
}
