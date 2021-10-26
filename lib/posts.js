import fs from 'fs'
import { join, path } from 'path'
import matter from 'gray-matter'

const ParentDirectory = 'content'

export function getPostSlugs(folder) {
  const postsDirectory = join(process.cwd(), ParentDirectory + '/' + folder)
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = [], folder) {
  const realSlug = slug.replace(/\.md$/, '')
  const postsDirectory = join(process.cwd(), ParentDirectory + '/' + folder)
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getPosts(fields = [],folder, limit, start) {
  const items = limit || 9999
  const slugs = getPostSlugs(folder)
  const offset = start || 0
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, folder))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
   
   return posts.slice(offset, offset+items);
}