// generateSitemap.ts
import * as fs from 'fs';
import * as path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

const generateSitemap = async () => {
  const sitemap = new SitemapStream({
    hostname: 'https://crafted-stack.vercel.app',
  });

  // Use the correct path to the 'pages' directory
  const pagesDir = path.resolve(__dirname, '../pages');

  // Add your static pages to the sitemap
  sitemap.write({ url: '/' });

  // Add dynamic pages if needed
  // Example: add dynamic pages from a directory
  const dynamicPages = fs.readdirSync(pagesDir).filter((file) => {
    return file.endsWith('.tsx') && file !== 'index.tsx';
  });

  dynamicPages.forEach((file) => {
    const pagePath = `/${file.replace(/\.tsx$/, '')}`;
    sitemap.write({ url: pagePath });
  });

  sitemap.end();

  // Convert the stream to a promise and save the sitemap to a file
  const sitemapXML = await streamToPromise(sitemap)
    .then((data) => data.toString())
    .catch((error) => {
      throw new Error(`Error converting stream to promise: ${error.message}`);
    });

  fs.writeFileSync('./public/sitemap.xml', sitemapXML);
};

generateSitemap();
