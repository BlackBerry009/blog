const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()

async function generate() {
  const feed = new RSS({
    title: 'BlackBerry',
    site_url: 'https://blog.blackberry009.top',
    feed_url: 'https://blog.blackberry009.top/feed.xml',
    image_url: 'https://avatars.githubusercontent.com/u/42471741?v=4'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))
  const allPosts = []
  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      const frontmatter = matter(content)
      allPosts.push({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: md.render(frontmatter.content),
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author,
      })
    })
  )

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  allPosts.forEach((post) => {
    feed.item(post)
  })
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
