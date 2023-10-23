import { writeFileSync } from 'fs'
import RSS from 'rss'
import { all } from '.contentlayer/generated'
import { DOMAIN } from '../src/constant/domain'

const feed = new RSS({
  title: 'My Blogs',
  feed_url: `${Domain}/rss.xml`,
  site_url: `${Domain}`,
})

allBlogs
  .map((blog) => ({
    title: blog.title,
    description: blog.description,
    url: `${Domain}/${blog.slug}`,
    //   date: blog.publishedAt,
  }))
  .forEach((item) => {
    feed.item(item)
  })

writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
