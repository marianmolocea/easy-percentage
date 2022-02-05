import * as fs from 'fs';

const Sitemap = () => {
  return null
}

export async function getServerSideProps({ res }: any) {
  const sitemap = ` <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.easypercentage.net/</loc>
      <lastmod>2022-02-05T21:55:03.374Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.easypercentage.net/privacy</loc>
      <lastmod>2022-02-05T21:55:03.374Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
