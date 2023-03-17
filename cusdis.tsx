import { useRouter } from 'next/router'
import { ReactCusdis } from 'react-cusdis'
import { useBlogContext } from 'nextra-theme-blog'
import React, { useEffect } from 'react'
import { useTheme } from 'nextra-theme-blog'

const Comments = () => {
  const { opts } = useBlogContext()
  const router = useRouter()
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    ;(window as any).CUSDIS?.setTheme(
      resolvedTheme === 'dark' ? 'dark' : 'light'
    )
  }, [resolvedTheme])

  return (
    <ReactCusdis
      lang="en"
      style={{ marginTop: '4rem' }}
      attrs={{
        host: 'https://cusdis.com',
        appId: '1137a882-35a0-464a-9d29-b45730be0357',
        pageId: router.pathname,
        pageTitle: opts.title,
        theme: resolvedTheme === 'dark' ? 'dark' : 'light',
      }}
    />
  )
}

export default Comments
