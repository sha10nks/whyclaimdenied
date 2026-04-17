import fs from 'fs/promises';
import path from 'path';

const STATES = [
  { slug: 'california', label: 'California', pascal: 'California' },
  { slug: 'florida', label: 'Florida', pascal: 'Florida' },
  { slug: 'texas', label: 'Texas', pascal: 'Texas' },
  { slug: 'new-york', label: 'New York', pascal: 'NewYork' },
  { slug: 'pennsylvania', label: 'Pennsylvania', pascal: 'Pennsylvania' },
  { slug: 'illinois', label: 'Illinois', pascal: 'Illinois' },
  { slug: 'ohio', label: 'Ohio', pascal: 'Ohio' },
  { slug: 'georgia', label: 'Georgia', pascal: 'Georgia' },
  { slug: 'north-carolina', label: 'North Carolina', pascal: 'NorthCarolina' },
  { slug: 'michigan', label: 'Michigan', pascal: 'Michigan' },
  { slug: 'new-jersey', label: 'New Jersey', pascal: 'NewJersey' },
  { slug: 'virginia', label: 'Virginia', pascal: 'Virginia' },
];

async function updateLazyLoading() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');

  for (const state of STATES) {
    for (const domain of ['Auto', 'Health']) {
      const fileName = `${domain}ClaimDenied${state.pascal}.jsx`;
      const filePath = path.join(pagesDir, fileName);

      try {
        let content = await fs.readFile(filePath, 'utf8');

        // Replace loading="eager" with loading="lazy"
        content = content.replace(/loading="eager"/g, 'loading="lazy"');
        
        // Remove fetchpriority="high" entirely
        content = content.replace(/\s*fetchpriority="high"/g, '');

        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Updated loading attributes in: ${fileName}`);
      } catch (err) {
        console.error(`Error processing ${fileName}:`, err.message);
      }
    }
  }
}

updateLazyLoading();