import { GetServerSideProps } from "next";
import projectsData from '../../src/data/projectsData';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://espeeebne.github.io";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/projects</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${projectsData
       .map((project) => {
         return `
       <url>
         <loc>${baseUrl}/projects/${project.slug}</loc>
         <lastmod>${new Date(project.date).toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
