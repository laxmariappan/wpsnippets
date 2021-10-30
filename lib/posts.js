import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const ParentDirectory = join(process.cwd(), 'content')

export function getPostSlugs(folder) {
  return fs.readdirSync(ParentDirectory+ '/' + folder)
}

export function getPostBySlug(slug, fields = [], folder) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(ParentDirectory+ '/' + folder, `${realSlug}.md`)
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