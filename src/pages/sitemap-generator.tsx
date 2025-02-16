import { GetServerSideProps } from 'next';
export const BASE_URL = 'https://espeeebne.github.io';
import projectsData from '../data/projectsData';

function generateSiteMap(posts: { slug: string; date: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${BASE_URL}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${BASE_URL}/projects</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
         <loc>${`${BASE_URL}/projects/${post.slug}`}</loc>
         <lastmod>${new Date(post.date).toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = projectsData;
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  return null;
}