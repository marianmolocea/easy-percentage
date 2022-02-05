import * as fs from 'fs';

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }: any) => {
  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        'product',
        '_app.tsx',
        '_document.tsx',
        '404.tsx',
        'sitemap.xml.tsx',
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      const pathName = staticPagePath.split('.')[0]
      const pageName = pathName === 'index' ? '' : pathName
      return `${process.env.NEXT_PUBLIC_BASE_URL}/${pageName}`
    })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
