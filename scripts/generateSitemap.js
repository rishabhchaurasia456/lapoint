// scripts/generateSitemap.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// List all your paths here
const paths = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/trip/:tripId',  // Example dynamic route, you should replace :tripId with actual IDs if possible
  // Add all other paths here manually
];

const generateSitemap = async () => {
  // Create a sitemap stream
  const sitemapStream = new SitemapStream({ hostname: 'https://kiteactiveventures.com' });

  // Write each path to the sitemap
  paths.forEach(path => {
    sitemapStream.write({ url: path, changefreq: 'daily', priority: 0.7 });
  });

  // Close the sitemap stream
  sitemapStream.end();

  // Convert the stream to a string (i.e., generate the actual sitemap XML)
  const sitemapXML = await streamToPromise(sitemapStream).then(sm => sm.toString());

  // Write the generated sitemap to a file in the public directory
  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapXML);

  console.log('Sitemap generated!');
};

// Execute the function
generateSitemap();
