const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')
const Feed = require('feed').Feed

const md = new MarkdownIt()

async function generate() {
  const feed = new Feed({
    title: 'BlackBerry',
    description: 'feedId:66321001434793986+userId:63034699812466688',
    favicon: 'https://avatars.githubusercontent.com/u/42471741?v=4',
    link: 'https://blog.blackberry009.top',
    feedLinks: {
      json: 'https://blog.blackberry009.top/feed.xml',
    },
    author: {
      name: "Blackberry",
      email: "baymax.lyg@gmail.com",
    }
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
        updated: frontmatter.data.date,
        description: md.render(frontmatter.content),
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author,
      })
    })
  )

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  allPosts.forEach((post) => {
    feed.addItem(post)
  })
  // console.log(feed);
  // console.log(feed.rss2());
  // console.log(feed.json1());
  await fs.writeFile('./public/feed.xml', feed.rss2())
}

generate()
